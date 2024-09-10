// import React, { useState, useEffect } from 'react';
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
//
//
// const WebSocketComponent = () => {
//     const [stompClient, setStompClient] = useState(null);
//     const [messages, setMessages] = useState([]);
//
//     useEffect(() => {
//         // Connecting to the WebSocket. WebSocket serverinə bağlantı qurmaq üçün bir WebSocket client yaradır
//         //  Bu sətir, brauzerin serverlə real-vaxt kommunikasiyası üçün "socket" adlanan bir kanal açmasına imkan verir.
//         const socket = new SockJS('http://localhost:8082/ws');
//
//         // yaradılan socket üzərində STOMP protokolu ilə işləmək üçün bir STOMP client yaradır
//         const client = Stomp.over(socket);
//         client.connect({}, function () {
//             // console.log('arif: ' + frame);
//             client.subscribe('/topic/cashbox', function (response) {
//                 const receivedData = JSON.parse(response.body);
//                 console.log("Received data:", receivedData);
//                 console.log("ssss SSSSSS")
//
//                 if(receivedData.messages) {
//                     setMessages(prev => [receivedData.messages]);
//                 }
//                 console.log(messages)
//                 // setMessages(prev => [...prev, messages]);
//                 // console.log(messages)
//             });
//         });
//         setStompClient(client);
//
//         // Disconnecting on unmount
//         return () => {
//             if (client) {
//                 client.disconnect();
//             }
//         };
//     }, []);
//
//     const sendMessage = (msg) => {
//         // Sending a message to the server
//         stompClient.send("/app/hello", {}, JSON.stringify("data"));
//         console.log("Message is sent bro!!!")
//     };
//
//     return (
//         <div>
//             <h2>Messages</h2>
//             {messages.map((msg, index) => (
//                 <p key={index}>{JSON.stringify(msg)}</p> // Ensure each message is displayed correctly
//             ))}
//             <button onClick={() => sendMessage("Hello Sver!")}>Send Message</button>
//         </div>
//     );
// };
//
// export default WebSocketComponent;
//
