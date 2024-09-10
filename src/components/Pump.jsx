import { useState } from 'react'
import React from 'react'
import "../css/pump.css"
import pumpOff from "../img/pumpOff.png"
import pumpOn from "../img/pumpOn.png"
import Modal from './Modal'

function Pump(props) {
    const [displayModule, setDisplayModule] = useState("none");
    const [pumpIsOn, setPumpIsOn] = useState(false) // Set valve state
    const [pumpImage, setPumpImage] = useState(pumpOff)

    // Open valve control module
    const openModule = () => {
        setDisplayModule("block");
        console.log(displayModule)
    }
    // Close valve control module
    const closeModule = () => {
        setDisplayModule("");
        console.log(displayModule)
    }
    const startPump = () => {

        if (!pumpIsOn) {
            setPumpIsOn(true)
            setPumpImage(pumpOn);
        }
        console.log("Pump opened. State is " + pumpIsOn)
    }
    // console.log("alma " + valveIsOpen)

    // Inhibit Sensor for maintenance 
    const stopPump = () => {

        if (pumpIsOn) {
            console.log("You closed the valve. Valve state is " + pumpIsOn)
            setPumpIsOn(false)
            setPumpImage(pumpOff);
        }
    }
    return (
        <div>
            <div id={props.id}>
                <img className='my_pump' onClick={openModule} style={{ width: '90%', cursor: 'pointer' }}
                    src={pumpImage} alt="" /> <br />
                <h4 style={{ color: 'white', width: '150px' }}>Suppresion pump</h4>
                <Modal clickBtn_1={startPump} clickBtn_2={stopPump}
                    display={displayModule}
                    closeModule={closeModule}
                    text1="Start"
                    text2="Stop" />

            </div>
        </div>


    )
}

export default Pump