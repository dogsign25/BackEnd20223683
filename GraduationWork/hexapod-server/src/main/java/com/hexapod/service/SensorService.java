package com.hexapod.service;

import com.hexapod.domain.dto.SensorBroadcastDto;
import com.hexapod.domain.dto.SensorDataDto;
import com.hexapod.domain.entity.Mission;
import com.hexapod.domain.entity.SensorLog;
import com.hexapod.repository.MissionRepository;
import com.hexapod.repository.SensorLogRepository;
import com.hexapod.websocket.WebSocketPublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Slf4j
@Service
@RequiredArgsConstructor
public class SensorService {

    private static final int OBSTACLE_WARN_DISTANCE_CM = 20;
    private static final double AUTO_MARK_SURVIVAL_THRESHOLD = 0.7;

    private final SensorLogRepository sensorLogRepository;
    private final MissionRepository missionRepository;
    private final SurvivorService survivorService;
    private final WebSocketPublisher webSocketPublisher;

    /**
     * 라즈베리파이 센서 데이터 수신 후 처리
     * 1. DB 저장
     * 2. 생존율 임계값 초과 시 자동 생존자 마킹
     * 3. 프론트로 WebSocket 브로드캐스트
     */
    @Transactional
    public void process(SensorDataDto dto) {
        // 1. 연결된 미션 조회 (missionId 없으면 로그만 남기고 스킵)
        Mission mission = null;
        if (dto.getMissionId() != null) {
            mission = missionRepository.findById(dto.getMissionId()).orElse(null);
            if (mission == null) {
                log.warn("존재하지 않는 missionId: {}", dto.getMissionId());
            }
        }

        // 2. DB 저장
        SensorLog log = toEntity(dto, mission);
        sensorLogRepository.save(log);

        // 3. 생존율 임계값 초과 → 자동 생존자 마킹
        double survivalRate = getSurvivalRate(dto);
        if (survivalRate >= AUTO_MARK_SURVIVAL_THRESHOLD) {
            survivorService.autoMarkFromSensor(dto);
        }

        // 4. 프론트로 브로드캐스트
        SensorBroadcastDto broadcast = toBroadcastDto(dto);
        webSocketPublisher.broadcastSensor(broadcast);
    }

    private SensorLog toEntity(SensorDataDto dto, Mission mission) {
        LocalDateTime timestamp = dto.getTimestamp() != null
                ? LocalDateTime.ofInstant(Instant.ofEpochMilli(dto.getTimestamp()), ZoneId.of("Asia/Seoul"))
                : LocalDateTime.now();

        return SensorLog.builder()
                .mission(mission)
                .timestamp(timestamp)
                .latitude(dto.getLocation() != null ? dto.getLocation().getLat() : null)
                .longitude(dto.getLocation() != null ? dto.getLocation().getLng() : null)
                .heading(dto.getLocation() != null ? dto.getLocation().getHeading() : null)
                .frontDistance(dto.getDistance() != null ? dto.getDistance().getFront() : null)
                .leftDistance(dto.getDistance() != null ? dto.getDistance().getLeft() : null)
                .rightDistance(dto.getDistance() != null ? dto.getDistance().getRight() : null)
                .thermalMaxTemp(dto.getThermal() != null ? dto.getThermal().getMaxTemp() : null)
                .gasLevel(dto.getGas() != null ? dto.getGas().getLevel() : null)
                .soundLevel(dto.getSound() != null ? dto.getSound().getLevel() : null)
                .survivalRate(getSurvivalRate(dto))
                .build();
    }

    private SensorBroadcastDto toBroadcastDto(SensorDataDto dto) {
        Integer frontDist = dto.getDistance() != null ? dto.getDistance().getFront() : null;
        boolean obstacleWarning = frontDist != null && frontDist < OBSTACLE_WARN_DISTANCE_CM;

        return SensorBroadcastDto.builder()
                .robotId(dto.getRobotId())
                .missionId(dto.getMissionId())
                .timestamp(LocalDateTime.now())
                .latitude(dto.getLocation() != null ? dto.getLocation().getLat() : null)
                .longitude(dto.getLocation() != null ? dto.getLocation().getLng() : null)
                .heading(dto.getLocation() != null ? dto.getLocation().getHeading() : null)
                .frontDistance(frontDist)
                .leftDistance(dto.getDistance() != null ? dto.getDistance().getLeft() : null)
                .rightDistance(dto.getDistance() != null ? dto.getDistance().getRight() : null)
                .thermalMaxTemp(dto.getThermal() != null ? dto.getThermal().getMaxTemp() : null)
                .gasLevel(dto.getGas() != null ? dto.getGas().getLevel() : null)
                .soundLevel(dto.getSound() != null ? dto.getSound().getLevel() : null)
                .survivalRate(getSurvivalRate(dto))
                .obstacleWarning(obstacleWarning)
                .build();
    }

    private double getSurvivalRate(SensorDataDto dto) {
        if (dto.getAi() == null || dto.getAi().getSurvivalRate() == null) return 0.0;
        return dto.getAi().getSurvivalRate();
    }
}