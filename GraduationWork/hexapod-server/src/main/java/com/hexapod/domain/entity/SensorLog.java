package com.hexapod.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "sensor_logs", indexes = {
        @Index(name = "idx_mission_time", columnList = "mission_id, timestamp")
})
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SensorLog {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mission_id")
    private Mission mission;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    // 위치
    private Double latitude;
    private Double longitude;
    private Double heading;             // 진행 방향각 (0~360도)

    // 장애물 거리 센서 (cm)
    private Integer frontDistance;
    private Integer leftDistance;
    private Integer rightDistance;

    // 생존자 탐지 센서
    private Double thermalMaxTemp;      // 열화상 최고 감지 온도 (℃)
    private Double gasLevel;            // 가스 농도 (ppm)
    private Double soundLevel;          // 소리 감지 (dB)

    // AI 생존율 (0.0 ~ 1.0)
    private Double survivalRate;
}