import React from 'react'
import tank from "../img/tank.png"
import ProgressBar from './ProgressBar';
import "../css/reservoir.css"

function Reservoir(props) {
    return (
        <div id='reservoir'>
            <p style={{
                textAlign: "center", color: 'white', fontWeight: "bold",
                fontSize: "20px"
            }}>{props.tagname}</p>
            <ProgressBar id="progressBar" />
            <img id='tankImg' src={tank} alt="" />

        </div>
    )
}

export default Reservoir