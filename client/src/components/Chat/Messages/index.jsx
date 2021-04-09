import React, { createRef, useEffect } from "react"
import CSSModule from "react-css-modules"
// import ScrollToBottom from "react-scroll-to-bottom"

import Message from "./Message"

import styles from "./styles.css"

function Messages({ messages, currentUser }) {
    const endRef = createRef();

    const ScrollToBottom = () => {
        endRef.current.scrollIntoView({behaviour: "smooth"})
    }

    useEffect(() => {
        ScrollToBottom();
    })

    return (
        <div className="messages-wrapper">
            {messages.map((message, i) => <div key={i}><Message message={message} currentUser={currentUser} /></div>)}
            <div ref={endRef} style={{float:"left", clear: "both"}}></div>
        </div>
    )
}


export default CSSModule(Messages, styles)