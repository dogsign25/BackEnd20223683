package com.hexapod.domain.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

/**
 * 라즈베리파이가 MQTT로 전송하는 JSON 포맷
 *
 * 토픽: hexapod/{robotId}/sensors
 * 전송 주기: 1초
 *
 * 라즈베리파이 전송 예시:
 * {
 *   "robotId": "robot-01",
 *   "missionId": 1,
 *   "timestamp": 1710000000000,
 *   "location": { "lat": 37.5, "lng": 127.0, "heading": 45.0 },
 *   "distance": { "front": 80, "left": 150, "right": 200 },
 *   "thermal": { "maxTemp": 36.5 },
 *   "gas": { "level": 12.3 },
 *   "sound": { "level": 55.0 },
 *   "ai": { "survivalRate": 0.82 }
 * }
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)     // 라즈베리파이가 필드 추가해도 에러 안남
public class SensorDataDto {

    private String robotId;
    private Long missionId;
    private Long timestamp;                     // epoch millis

    private LocationPayload location;
    private DistancePayload distance;
    private ThermalPayload thermal;
    private GasPayload gas;
    private SoundPayload sound;
    private AiPayload ai;

    @Getter @Setter @NoArgsConstructor
    public static class LocationPayload {
        private Double lat;
        private Double lng;
        private Double heading;
    }

    @Getter @Setter @NoArgsConstructor
    public static class DistancePayload {
        private Integer front;
        private Integer left;
        private Integer right;
    }

    @Getter @Setter @NoArgsConstructor
    public static class ThermalPayload {
        private Double maxTemp;
    }

    @Getter @Setter @NoArgsConstructor
    public static class GasPayload {
        private Double level;           // ppm
    }

    @Getter @Setter @NoArgsConstructor
    public static class SoundPayload {
        private Double level;           // dB
    }

    @Getter @Setter @NoArgsConstructor
    public static class AiPayload {
        private Double survivalRate;    // 0.0 ~ 1.0
    }
}