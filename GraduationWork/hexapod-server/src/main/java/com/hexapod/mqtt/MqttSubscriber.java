package com.hexapod.mqtt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hexapod.domain.dto.AlertDto;
import com.hexapod.domain.dto.SensorDataDto;
import com.hexapod.service.SensorService;
import com.hexapod.service.SurvivorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MqttSubscriber {

    private final ObjectMapper objectMapper;
    private final SensorService sensorService;
    private final SurvivorService survivorService;

    /**
     * mqttInboundChannel 로 들어오는 모든 MQTT 메시지를 여기서 수신
     * 토픽을 파싱해서 적절한 Service로 라우팅
     */
    @ServiceActivator(inputChannel = "mqttInboundChannel")
    public void handleMessage(Message<?> message) {
        // MQTT 헤더에서 토픽 추출
        String topic = (String) message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC);
        String payload = (String) message.getPayload();

        log.debug("MQTT 수신 | topic: {} | payload: {}", topic, payload);

        if (topic == null) {
            log.warn("토픽 정보 없는 MQTT 메시지 수신");
            return;
        }

        try {
            if (topic.endsWith("/sensors")) {
                handleSensorData(payload);
            } else if (topic.endsWith("/alert")) {
                handleAlert(payload);
            } else if (topic.endsWith("/status")) {
                handleStatus(topic, payload);
            } else {
                log.warn("알 수 없는 토픽: {}", topic);
            }
        } catch (Exception e) {
            log.error("MQTT 메시지 처리 중 오류 | topic: {} | error: {}", topic, e.getMessage(), e);
        }
    }

    /**
     * hexapod/{robotId}/sensors
     * 1초 주기 센서 데이터 수신
     */
    private void handleSensorData(String payload) throws Exception {
        SensorDataDto dto = objectMapper.readValue(payload, SensorDataDto.class);
        sensorService.process(dto);
    }

    /**
     * hexapod/{robotId}/alert
     * 생존자 감지 이벤트 (즉시 발행)
     */
    private void handleAlert(String payload) throws Exception {
        AlertDto dto = objectMapper.readValue(payload, AlertDto.class);
        survivorService.mark(dto);
    }

    /**
     * hexapod/{robotId}/status
     * 배터리, 가이트 상태 업데이트
     * topic에서 robotId 파싱: "hexapod/robot-01/status" -> "robot-01"
     */
    private void handleStatus(String topic, String payload) {
        String robotId = extractRobotId(topic);
        log.info("로봇 상태 업데이트 | robotId: {} | payload: {}", robotId, payload);
        // TODO: RobotService.updateStatus(robotId, payload)
    }

    /**
     * "hexapod/robot-01/sensors" -> "robot-01"
     */
    private String extractRobotId(String topic) {
        String[] parts = topic.split("/");
        return parts.length >= 2 ? parts[1] : "unknown";
    }
}