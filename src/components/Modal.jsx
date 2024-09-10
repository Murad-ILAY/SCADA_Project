import React from 'react'
import "../css/modal.css"

function Modal(props) {
    // console.log(props.rotate)


    return (

        // set className block to hide the module
        <div id="myModal" className={`modal ${props.display} ${props.rotate}`}>
            <div className="modal-content">
                <span onClick={props.closeModule} className="close">&times;</span>
                <button onClick={props.clickBtn_1} style={{ background: "green" }}>{props.text1}</button>
                <button onClick={props.clickBtn_2} style={{ background: "red" }}>{props.text2}</button>
            </div>

        </div>
    )
}

export default Modal