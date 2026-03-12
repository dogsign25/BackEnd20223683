package com.hexapod.service;

import com.hexapod.domain.dto.AlertDto;
import com.hexapod.domain.dto.SensorDataDto;
import com.hexapod.domain.entity.Mission;
import com.hexapod.domain.entity.SurvivorMark;
import com.hexapod.repository.MissionRepository;
import com.hexapod.repository.SurvivorMarkRepository;
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
public class SurvivorService {

    private final SurvivorMarkRepository survivorMarkRepository;
    private final MissionRepository missionRepository;
    private final WebSocketPublisher webSocketPublisher;

    /**
     * 라즈베리파이가 명시적으로 alert 토픽으로 발행한 생존자 감지 이벤트 처리
     */
    @Transactional
    public void mark(AlertDto dto) {
        Mission mission = dto.getMissionId() != null
                ? missionRepository.findById(dto.getMissionId()).orElse(null)
                : null;

        SurvivorMark mark = SurvivorMark.builder()
                .mission(mission)
                .latitude(dto.getLat())
                .longitude(dto.getLng())
                .survivalRate(dto.getSurvivalRate())
                .detectedAt(toLocalDateTime(dto.getTimestamp()))
                .snapshotUrl(dto.getSnapshotUrl())
                .detectedByCamera(dto.getTriggers() != null && Boolean.TRUE.equals(dto.getTriggers().getCamera()))
                .detectedByThermal(dto.getTriggers() != null && Boolean.TRUE.equals(dto.getTriggers().getThermal()))
                .detectedBySound(dto.getTriggers() != null && Boolean.TRUE.equals(dto.getTriggers().getSound()))
                .build();

        survivorMarkRepository.save(mark);
        log.info("생존자 마킹 저장 | lat: {}, lng: {}, survivalRate: {}",
                dto.getLat(), dto.getLng(), dto.getSurvivalRate());

        // 프론트로 즉시 알림
        webSocketPublisher.broadcastAlert(dto);
    }

    /**
     * 센서 데이터에서 생존율 임계값 초과 시 자동 마킹
     * (alert 토픽 없이 sensors 토픽만으로 감지된 경우)
     */
    @Transactional
    public void autoMarkFromSensor(SensorDataDto dto) {
        Mission mission = dto.getMissionId() != null
                ? missionRepository.findById(dto.getMissionId()).orElse(null)
                : null;

        double survivalRate = dto.getAi() != null && dto.getAi().getSurvivalRate() != null
                ? dto.getAi().getSurvivalRate() : 0.0;

        SurvivorMark mark = SurvivorMark.builder()
                .mission(mission)
                .latitude(dto.getLocation() != null ? dto.getLocation().getLat() : null)
                .longitude(dto.getLocation() != null ? dto.getLocation().getLng() : null)
                .survivalRate(survivalRate)
                .detectedAt(LocalDateTime.now())
                .detectedByCamera(false)        // sensors 토픽엔 카메라 정보 없음
                .detectedByThermal(dto.getThermal() != null && dto.getThermal().getMaxTemp() != null
                        && dto.getThermal().getMaxTemp() > 35.0)
                .detectedBySound(dto.getSound() != null && dto.getSound().getLevel() != null
                        && dto.getSound().getLevel() > 60.0)
                .build();

        survivorMarkRepository.save(mark);
        log.info("자동 생존자 마킹 | robotId: {} | survivalRate: {}", dto.getRobotId(), survivalRate);
    }

    private LocalDateTime toLocalDateTime(Long epochMilli) {
        if (epochMilli == null) return LocalDateTime.now();
        return LocalDateTime.ofInstant(Instant.ofEpochMilli(epochMilli), ZoneId.of("Asia/Seoul"));
    }
}