import React from 'react'
import compressor_1 from "../img/compressor1.jpg"
import compressor_2 from "../img/compressor2.jpg"
import compressor_3 from "../img/compressor3.jpg"

function CompressorRoom(props) {
    return (
        <div style={{ border: '2px,solid, green' }} id='compressor_container'>
            <div style={{ border: '1px,solid, red', display:'flex', justifyContent:'space-between' }}>
                <img className={props.className} src={compressor_1} />
                <img className={props.className} src={compressor_2} />
                <img className={props.className} src={compressor_3} />
            </div>
        </div>
    )
}

export default CompressorRoom