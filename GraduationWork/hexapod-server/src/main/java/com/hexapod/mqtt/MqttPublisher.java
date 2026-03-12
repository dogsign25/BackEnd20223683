package com.hexapod.mqtt;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.messaging.MessageChannel;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MqttPublisher {

    private final MessageChannel mqttOutboundChannel;
    private final ObjectMapper objectMapper;

    /**
     * 특정 로봇에 명령 전송
     * 토픽: hexapod/{robotId}/command
     *
     * @param robotId 로봇 식별자 (ex: "robot-01")
     * @param payload 전송할 객체 (JSON 직렬화됨)
     */
    public void publish(String robotId, Object payload) {
        try {
            String topic = "hexapod/" + robotId + "/command";
            String json = objectMapper.writeValueAsString(payload);

            mqttOutboundChannel.send(
                    MessageBuilder.withPayload(json)
                            .setHeader(MqttHeaders.TOPIC, topic)
                            .setHeader(MqttHeaders.QOS, 1)
                            .build()
            );

            log.debug("MQTT 발행 | topic: {} | payload: {}", topic, json);
        } catch (Exception e) {
            log.error("MQTT 발행 실패 | robotId: {} | error: {}", robotId, e.getMessage(), e);
        }
    }
}