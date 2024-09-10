import React, { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs';

const WebSocketClient = () => {
    useEffect(() => {
        const sock = new SockJS('http://localhost:8080/ws'); // URL-ni müvafiq olaraq dəyişin
        const client = Stomp.over(sock);

        client.connect({}, frame => {
            console.log('Connected: ' + frame);
            client.subscribe('/topic/cashbox', message => {
                const data = JSON.parse(message.body);
                console.log('Received message:', data); // Burada daxil olan məlumatları konsola yazırıq
            });
        });

        return () => {
            if (client) {
                client.disconnect();
                console.log('Disconnected');
            }
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Connection Active</h2>
        </div>
    );
};

export default WebSocketClient;
