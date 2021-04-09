import React, { useContext, useEffect, useState } from "react"
import CSSModules from "react-css-modules"
import { Link } from "react-router-dom"

import queryString from "query-string"

import { Context } from "../../Store"
import Input from "./Input"

import styles from "./styles.css"
console.log(styles);

function LogIn({location}) {
    const [s_Room, SetRoom] = useState("");
    const [c_State, SetState] = useContext(Context)

    useEffect(() => {
        const room = queryString.parse(location.search)?.room;
        if(room) SetRoom(room)
    }, [])

    let SubmitClick = (event) => {
        if (!s_Room) {
            event.preventDefault()
        }
    }

    return (
        <div className="login-screen-filler">
            <div className="login-wrapper">
                <h1 className="login-heading">Join Chat</h1>
                <div className="login-input-wrapper">
                    <Input placeholder="Username" onChange={(event) => SetState({ username: event.target.value })}/>
                    <small>{!c_State.username ? "Username is not valid" : ""}</small>
                </div>
                <div className="login-input-wrapper">
                    <Input placeholder="Room" onChange={(event) => SetRoom(event.target.value)}/>
                    <small>{!s_Room ? "Room is not valid" : ""}</small>
                </div>
                <Link to={`/chat?room=${s_Room}`}>
                    <button className="login-button" type="submit" onClick={SubmitClick}>Log In</button>
                </Link>
            </div>
        </div>
    );
}


export default CSSModules(LogIn, styles)