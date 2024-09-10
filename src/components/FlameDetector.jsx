import React, {useEffect, useState} from 'react'
import flame from "../img/flame.png"
import Modal from './Modal'



export default function FlameDetector_R(props) {
    const [displayModule, setDisplayModule] = useState("none");
    const [sensorIsInhibited, setSensorIsInhibited] = useState(false) // Set inhibit state
    const [sensorIsSimulated, setSensorIsSimulated] = useState(false) // Set simulation state
    const [alarmIsActive, setAlarmIsActive] = useState(props.highAlarmIsActive) // Set simulation state

    useEffect(() => {
        setAlarmIsActive(props.highAlarmIsActive)
    }, [props.highAlarmIsActive]);



    // Open detector control module
    const openModule = () => {
        setDisplayModule("block");
    }
    // Close detector control module
    const closeModule = () => {
        setDisplayModule("");
    }


    const simulateSensor = () => {
        // if sensor is not inhibited then simulate
        if (!sensorIsInhibited) {
            // if sensor is not simulated yet simulate it
            if (!sensorIsSimulated) {
                setSensorIsSimulated(!sensorIsSimulated)
                console.log("Fire Alarm, leave the room")
            } else { // if sensor is not inhibited then can
                setSensorIsSimulated(!sensorIsSimulated)
                console.log("Fire extinguised, return office")
            }
        }
    }

    // Inhibit Sensor for maintenance 
    const inhibitSensor = () => {

        if (sensorIsInhibited) {
            setSensorIsInhibited(!sensorIsInhibited);
            console.log("Sensor Uninhibited")
        } else {
            setSensorIsInhibited(!sensorIsInhibited);
            console.log("Sensor inhibited!!!")
        }
    }
    return (
        <div className='flame_container' id={props.id}>
            <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>{props.tagName}</p>
            <div>
                <img onClick={openModule} className={props.className} src={props.src} alt='' />
                <img className={sensorIsSimulated || alarmIsActive ? "" : "hidden"} id={props.fireId} src={flame} alt="" />

            </div>
            <Modal clickBtn_1={simulateSensor} clickBtn_2={inhibitSensor} display={displayModule}
                closeModule={closeModule} text1={sensorIsSimulated ? "Stop simulation" : "Simulate"}
                text2={sensorIsInhibited ? "Uninhibit" : "Inhibit"} />
            <p style={{
                width: '80px', fontSize: '18px', textAlign: 'center',
                backgroundColor: "red", color: 'white', borderRadius: '15px', fontWeight: "bold"
            }} >0.0</p>
        </div>
    )
}
