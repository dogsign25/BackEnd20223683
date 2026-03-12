package com.hexapod.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "missions")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Mission {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "robot_id", nullable = false)
    private Robot robot;

    private String areaName;            // 정찰 지역명

    @Column(nullable = false)
    private LocalDateTime startedAt;

    private LocalDateTime endedAt;      // null이면 진행 중

    @Enumerated(EnumType.STRING)
    private MissionStatus status;

    public enum MissionStatus {
        IN_PROGRESS, COMPLETED, ABORTED
    }
}