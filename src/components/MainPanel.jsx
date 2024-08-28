import { useState } from 'react';
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




function MainPanel() {

    const [valveIsOpen, setValveIsOpen] = useState(false) // Set valve state
    const [valveImage, setValveImage] = useState(closedvalve) // Set valve picture if open green otherwise red
    const [pipeIsActive, setPipeIsActive] = useState(false)

    const openValve = () => {
        let interval;
        if (!valveIsOpen) {
            setValveIsOpen(true)
            setValveImage(openedvalve);
            setPipeIsActive(true)
        }
    }

    const closeValve = () => {
        if (valveIsOpen) {
            setValveIsOpen(false)
            setValveImage(closedvalve)
            setPipeIsActive(false)
        }
    }




    return (
        <div id='dashboard'>
            <div id="reservoirs-container">
                <Reservoir tagname="Water tank" />
                <Reservoir tagname="Foam tank" />
            </div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id='tank_1_exit_pipe'></div>

            <Valve className="valves" id="valve_1" open={openValve} close={closeValve} image={valveImage} />
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id='tank_2_exit_pipe'></div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id='tank_1_2_common_pipe'></div>
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id='pump1_entry_pipe'></div>
            <Pump id="pump-1" />
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id="pump_1_exit_pipe"></div>
            <PressureTransmitter className='transmitter_position' />
            <div className={pipeIsActive ? 'common_pipeline_active' : 'common_pipeline_close'} id="pressure_1_exit_pipe"></div>
            <CompressorRoom className='compressor_container compressors_dimensions' />
            <FlameDetectorR tagName="BTF-1" src={x3301R} className='flame_detectors_size' id='flame_1_1_comp_1' fireId='flame_R' />
            <FlameDetectorR tagName="BTF-2" src={x3301R} className='flame_detectors_size' id='flame_1_2_comp_1' fireId='flame_R' />
            <FlameDetectorR tagName="BTF-3" src={x3301L} className='flame_detectors_size' id='flame_3_1_comp_3' fireId='flame_L' />
            <FlameDetectorR tagName="BTF-4" src={x3301L} className='flame_detectors_size' id='flame_3_2_comp_3' fireId='flame_L' />



        </div>
    )
}

export default MainPanel