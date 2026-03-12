package com.hexapod.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "survivor_marks")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SurvivorMark {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mission_id")
    private Mission mission;

    private Double latitude;
    private Double longitude;
    private Double survivalRate;        // 감지 당시 생존율

    private LocalDateTime detectedAt;
    private String snapshotUrl;         // 감지 당시 캡처 이미지 경로 (optional)

    // 감지 근거 (어떤 센서가 트리거했는지)
    private Boolean detectedByCamera;
    private Boolean detectedByThermal;
    private Boolean detectedBySound;
}