import React, { useContext, useEffect, useState } from "react"
import { Redirect, Link } from "react-router-dom"
import CSSModule from "react-css-modules"

import queryString from "query-string"
import io from "socket.io-client"

import { Context } from "../../Store"

import Header from "./Header"
import Messages from "./Messages"
import MessageInput from "./MessageInput"

import styles from "./styles.css"


let socket;
const socketSettigns = {
    "force new connection": true,
    "reconnectAttempts": "Infinity",
    "timeout": 10001,
    "transports": ["websocket"]
}

function Chat({ location }) {
    const [s_Redirect, SetRedirect] = useState(false)
    const [s_Error, SetError] = useState(null)

    const [s_Room, SetRoom] = useState("")

    const [s_Message, SetMessage] = useState('')
    const [s_MessageList, SetMessageList] = useState([])

    const [c_State] = useContext(Context)

    const SERVER = `${window.location.hostname}:3030`

    // component did mount
    useEffect(() => {
        const room = queryString.parse(location.search)?.room;
        // is room queried
        if (!room) { SetRedirect(true); return undefined }
        SetRoom(room);

        // is username difined
        if (!c_State.username) { SetRedirect(true); return undefined }

        socket = io(SERVER, socketSettigns);

        // socket "hello" signal
        socket.emit("join", { username: c_State.username, room }, (error) => {
            if (error) {
                SetError(error)
            }
        });

        socket.on("message", (message) => {
            SetMessageList(state => {
                const newMessageList = state.concat(message)
                return newMessageList
            })
        })

        return () => {
            socket.disconnect()
            socket.off();
        }
    }, [SERVER, location.search])


    const sendMessage = () => {
        if (s_Message) {
            socket.emit("send-message", s_Message, () => SetMessage(""))
        }
    }


    return (
        <div className="chat-screen-filler">
            <div className="chat-wrapper">
                {s_Redirect ? <Redirect to={`?room=${s_Room}`} /> : null}
                {
                    s_Error
                        ? <>
                            <div className="chat-error">
                                <h1>Connection error</h1>
                                <p>{s_Error}</p>
                                <Link>
                                    <button>Back to LogIn</button>
                                </Link>
                            </div>
                        </>
                        : <>
                            <Header room={s_Room} />
                            <Messages messages={s_MessageList} currentUser={c_State.username} />
                            <MessageInput message={s_Message} changeMessage={SetMessage} sendMessage={sendMessage} />
                        </>
                }
            </div>
        </div>
    );
}

export default CSSModule(Chat, styles)