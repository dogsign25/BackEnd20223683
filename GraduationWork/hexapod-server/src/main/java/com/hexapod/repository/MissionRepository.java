package com.hexapod.repository;

import com.hexapod.domain.entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {

    // 특정 로봇의 진행 중인 미션 조회 (robotKey 기준)
    Optional<Mission> findByRobotIdAndStatus(Long robotId, Mission.MissionStatus status);
}