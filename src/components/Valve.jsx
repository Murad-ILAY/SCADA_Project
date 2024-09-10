import { useState } from 'react';

import React from 'react'
import Modal from './Modal'


function Valve(props) {

    const [displayModule, setDisplayModule] = useState("none");




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


    return (
        <>
            <div className='valve_container' id={props.id}>
                <p id='valveTagname'> Valve-1 </p>
                <img onClick={openModule} src={props.image} id='valve_image' alt='' />
                <Modal clickBtn_1={props.open} clickBtn_2={props.close}
                    display={displayModule}
                    closeModule={closeModule}
                    text1="Open"
                    text2="Close" />

            </div>
        </>
    )
}

export default Valve