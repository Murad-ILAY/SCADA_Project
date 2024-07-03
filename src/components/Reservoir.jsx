import React from 'react'
import tank from "../img/tank.jpeg"
import ProgressBar from './ProgressBar';
import "../css/reservoir.css"

function Reservoir() {
    return (
        <div id='reservoir'>
            <ProgressBar id="progressBar"/>
            <img id='tankImg' src={tank} alt="" />

        </div>
    )
}

export default Reservoir