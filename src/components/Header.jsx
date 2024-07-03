import React from 'react'
import "../css/Header.css"
import "../css/Buttons.css"

function Header() {
    return (
        <header>
            <div className="logo">
                <h1 style={{ color: "red " }}>My Application</h1>
            </div>
            <ul>
                <button id="start">Start</button>
                <button id="stop">Stop</button>
                <button id="logIn">Log in</button>
                <button id="logOut">Log out</button>
                
            </ul>
        </header>
    )
}

export default Header