import React, { useContext } from "react"
import CSSModule from "react-css-modules"

import styles from "./styles.css"


function Message({ message: { username, text }, currentUser }) {
    let isOwnMessage = currentUser === username

    return (
        <div className="message-container">
            {isOwnMessage
                ? (
                    <div className="message-wrapper message-justify-end">
                        <p className="message-sender">{currentUser}</p>
                        <div className="message-box">
                            <p className="message-text">{text}</p>
                        </div>
                    </div>
                )
                : (
                    <div className="message-wrapper message-justify-start">
                        <p className="message-sender">{username}</p>
                        <div className="message-box">
                            <p className="message-text">{text}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}


export default CSSModule(Message, styles)