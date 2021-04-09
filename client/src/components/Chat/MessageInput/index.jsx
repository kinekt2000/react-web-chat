import React from "react"
import CSSModule from "react-css-modules"

import styles from "./styles.css"

function MessageInput({message, changeMessage, sendMessage}) {

    const handleInput = (event) => {
        if (event.key === "Enter") {
            event.stopPropagation()
            if (event.ctrlKey) {
                changeMessage(message + "\n")
            }
            else {
                sendMessage()
            }
        }
    }

    return (
        <div className="message-input-wrapper">
            <input placeholder="Write a message..." value={message} onChange={event => changeMessage(event.target.value)} onKeyPress={handleInput} type="text" />
            <button onClick={event => sendMessage()}>SEND</button>
        </div>
    )
}


export default CSSModule(MessageInput, styles)