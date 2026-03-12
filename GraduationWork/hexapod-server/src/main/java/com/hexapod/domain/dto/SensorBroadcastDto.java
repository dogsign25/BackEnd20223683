package com.hexapod.domain.dto;

import lombok.*;
import java.time.LocalDateTime;

/**
 * 백엔드 → React 프론트로 WebSocket(/topic/sensors/{robotId}) 을 통해 전송
 * 라즈베리파이 DTO를 그대로 넘기지 않고 정제된 형태로 변환
 */
@Getter
@Builder
@AllArgsConstructor
public class SensorBroadcastDto {

    private String robotId;
    private Long missionId;
    private LocalDateTime timestamp;

    // 위치
    private Double latitude;
    private Double longitude;
    private Double heading;

    // 거리 센서
    private Integer frontDistance;
    private Integer leftDistance;
    private Integer rightDistance;

    // 탐지 센서
    private Double thermalMaxTemp;
    private Double gasLevel;
    private Double soundLevel;

    // AI
    private Double survivalRate;

    // 장애물 경고 (백엔드에서 판단해서 추가)
    private Boolean obstacleWarning;    // frontDistance < 20cm 이면 true
}