import {useEffect, useState} from 'react';
import React from 'react'
import Reservoir from './Reservoir';
import Pump from './Pump';
import "../css/tank.css"
import "../css/mainPanel.css"
import "../css/pump.css"
import CompressorRoom from "./CompressorRoom"
import FlameDetectorR from './FlameDetector';
import Valve from './Valve';
import PressureTransmitter from './PressureTransmitter';
import x3301R from "../img/flame3301R.png"
import x3301L from "../img/flame3301L.png"
import closedvalve from "../img/valve.png"
import openedvalve from "../img/openvalve.png"
import SockJS from "sockjs-client";
import Stomp from "stompjs";




function MainPanel(props) {

    const [valveIsOpen, setValveIsOpen] = useState(false) // Set valve state
    const [valveImage, setValveImage] = useState(closedvalve) // Set valve picture if open green otherwise red
    const [pipeIsActive, setPipeIsActive] = useState(false)
    const [isFire, setIsFire] = useState(props.alamStateArray) // Set fire state

    const openValve = () => {
        let interval;
        if (!valveIsOpen) {
            setValveIsOpen(true)
            setValveImage(openedvalve);
            setPipeIsActive(true)
        }
        closeValve();
    }

    const closeValve = () => {
        if (valveIsOpen) {
            setValveIsOpen(false)
            setValveImage(closedvalve)
            setPipeIsActive(false)
        }
    }

// ----------------------------------
    const socket = new SockJS('http://localhost:8082/ws');
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [client,setClient] = useState(Stomp.over(socket))


    // To createconnecetion with websocket and receive data from backend
    const connectAndReceiveDataFromWebSocket = () =>{
        const socket = new SockJS('http://localhost:8082/ws');
        const client = Stomp.over(socket);
        client.connect({}, function () {
            console.log("Connected to WebSocket");

            client.subscribe('/topic/cashbox', function (response) {
                console.log("My first state "+messages)
                const receivedData = JSON.parse(response.body);
                console.log("Received data:", receivedData);
                console.log(receivedData.messages[0])
                console.log("VALVE value is "+receivedData.messages[1][0])
                setValveIsOpen(receivedData.messages[1][0])
                openValve();



                if(receivedData.messages) {
                    setMessages(receivedData.messages);
                    console.log("My last state "+ messages)
                }
                console.log("My lastly state "+ messages)
            });
        });
        setStompClient(client);

        // Disconnecting on unmount
        return () => {
            if (client) {
                client.disconnect();
                console.log("Disconnected from WebSocket");
            }
        };
    }

    useEffect(() => {
        connectAndReceiveDataFromWebSocket()
    },[]);

    const sendMessage = (msg) => {
        // Sending a message to the server
        if (stompClient) {
            stompClient.send("/app/hello", {}, JSON.stringify("data"));
            console.log("Message is sent bro!!!")
            // console.log("Almaaaaaaa "+messages)
            console.log("Almaaaaaaa "+valveIsOpen)
        }
    };

    return (
        <div id='dashboard'>
            <div id="reservoirs-container">
                <Reservoir tagname="Water tank"/>
                <Reservoir tagname="Foam tank"/>
            </div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id='tank_1_exit_pipe'></div>

            <Valve className="valves" id="valve_1" open={openValve} close={closeValve} image={valveImage}/>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id='tank_2_exit_pipe'></div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id='tank_1_2_common_pipe'></div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id='pump1_entry_pipe'></div>
            <Pump id="pump-1"/>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id="pump_1_exit_pipe"></div>
            <PressureTransmitter className='transmitter_position'/>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'}
                 id="pressure_1_exit_pipe"></div>
            <CompressorRoom className='compressor_container compressors_dimensions'/>
            <FlameDetectorR highAlarmIsActive={messages[0]} tagName="BTF-1" src={x3301R}
                            className='flame_detectors_size' id='flame_1_1_comp_1' fireId='flame_R'/>
            <FlameDetectorR highAlarmIsActive={messages[1]} tagName="BTF-2" src={x3301R}
                            className='flame_detectors_size' id='flame_1_2_comp_1' fireId='flame_R'/>
            <FlameDetectorR highAlarmIsActive={messages[2]} tagName="BTF-3" src={x3301L}
                            className='flame_detectors_size' id='flame_3_1_comp_3' fireId='flame_L'/>
            <FlameDetectorR highAlarmIsActive={messages[3]} tagName="BTF-4" src={x3301L}
                            className='flame_detectors_size' id='flame_3_2_comp_3' fireId='flame_L'/>

            <div>
                <h2>Messages</h2>
                {messages.map((msg, index) => (
                    <p key={index}>{JSON.stringify(msg)}</p> // Ensure each message is displayed correctly
                ))}
                <button onClick={() => sendMessage("Hello Server!")}>Send Message</button>
            </div>

        </div>
    )
}

export default MainPanel