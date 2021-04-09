import React from "react"
import CSSModule from "react-css-modules"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faTimes } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles.css"


function Header({ room, username }) {
    return (
        <div className="header-wrapper">
            <div className="header-left">
                <FontAwesomeIcon icon={faComments} />
                <span>{room}</span>
            </div>
            <div className="header-right">
                <Link to={`/?room=${room}`}>
                    <FontAwesomeIcon icon={faTimes} />
                </Link>
            </div>
        </div>
    )
}

export default CSSModule(Header, styles)