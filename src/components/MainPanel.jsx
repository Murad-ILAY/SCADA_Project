import React from 'react'
import Reservoir from './Reservoir';
import "../css/tank.css"
import "../css/mainPanel.css"
import "../css/pump.css"
import pump from "../img/pump.png"


function MainPanel() {
    return (
        <div id='dashboard'>
            <div id="reservoirs-container">
                <Reservoir id="tank-1" />
                <Reservoir id="tank-2" />
            </div>
            <img id='pump-1' src={pump} />
        </div>
    )
}

export default MainPanel