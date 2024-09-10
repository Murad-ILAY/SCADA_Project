import React from 'react'
import pressure from "../img/pressure.png"
import "../css/pressureTransmitter.css"

function PressureTransmitter(props) {
    return (
        <div id='pressure_tran_container' className={props.className} >
            <h2 >0.0</h2>
            <img id='pressure_1' src={pressure} alt="" />
        </div>
    )
}

export default PressureTransmitter