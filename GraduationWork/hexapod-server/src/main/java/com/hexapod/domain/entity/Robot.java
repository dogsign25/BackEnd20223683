package com.hexapod.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "robots")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Robot {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String robotKey;        // "robot-01" 같은 식별 문자열 (MQTT topic의 robotId)

    private String name;

    @Enumerated(EnumType.STRING)
    private RobotStatus status;

    private Integer batteryLevel;   // 0~100 (%)
    private String gaitMode;        // WALK / TURN / STOP / IDLE

    private LocalDateTime lastSeenAt;

    public enum RobotStatus {
        ONLINE, OFFLINE, ERROR
    }
}