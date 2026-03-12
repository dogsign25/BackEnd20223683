package com.hexapod.config;

import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.outbound.MqttPahoMessageHandler;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;

@Configuration
public class MqttConfig {

    @Value("${mqtt.broker-url}")
    private String brokerUrl;

    @Value("${mqtt.client-id}")
    private String clientId;

    @Value("${mqtt.username:}")
    private String username;

    @Value("${mqtt.password:}")
    private String password;

    @Value("${mqtt.topics.sensor}")
    private String sensorTopic;

    @Value("${mqtt.topics.alert}")
    private String alertTopic;

    @Value("${mqtt.topics.status}")
    private String statusTopic;

    // ──────────────────────────────────────────────
    // 공통: MQTT 클라이언트 팩토리 (인증 + 재연결 설정)
    // ──────────────────────────────────────────────
    @Bean
    public MqttPahoClientFactory mqttClientFactory() {
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        MqttConnectOptions options = new MqttConnectOptions();

        options.setServerURIs(new String[]{brokerUrl});
        options.setCleanSession(true);
        options.setAutomaticReconnect(true);        // 연결 끊기면 자동 재연결
        options.setConnectionTimeout(10);
        options.setKeepAliveInterval(30);

        if (!username.isBlank()) {
            options.setUserName(username);
            options.setPassword(password.toCharArray());
        }

        factory.setConnectionOptions(options);
        return factory;
    }

    // ──────────────────────────────────────────────
    // INBOUND: 라즈베리파이 → Spring
    // 구독 토픽: sensors, alert, status
    // ──────────────────────────────────────────────

    /**
     * 수신 메시지가 흘러들어오는 채널
     * MqttSubscriber 에서 @ServiceActivator 로 이 채널을 리슨함
     */
    @Bean
    public MessageChannel mqttInboundChannel() {
        return new DirectChannel();
    }

    /**
     * MQTT 브로커의 토픽들을 구독하는 어댑터
     * 메시지 수신 시 mqttInboundChannel 로 전달
     */
    @Bean
    public MqttPahoMessageDrivenChannelAdapter mqttInboundAdapter() {
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter(
                        clientId + "-sub",
                        mqttClientFactory(),
                        sensorTopic,   // hexapod/+/sensors
                        alertTopic,    // hexapod/+/alert
                        statusTopic    // hexapod/+/status
                );

        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(1);                          // QoS 1: 최소 1회 전달 보장
        adapter.setOutputChannel(mqttInboundChannel());
        return adapter;
    }

    // ──────────────────────────────────────────────
    // OUTBOUND: Spring → 라즈베리파이 (로봇 제어 명령)
    // ──────────────────────────────────────────────

    @Bean
    public MessageChannel mqttOutboundChannel() {
        return new DirectChannel();
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttOutboundChannel")
    public MessageHandler mqttOutboundHandler() {
        MqttPahoMessageHandler handler =
                new MqttPahoMessageHandler(clientId + "-pub", mqttClientFactory());
        handler.setAsync(true);
        handler.setDefaultQos(1);
        return handler;
    }
}