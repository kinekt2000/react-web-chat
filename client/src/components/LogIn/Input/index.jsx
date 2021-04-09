import React from "react"
import CSSModule from "react-css-modules"

import styles from "./styles.css"

function Input({placeholder, value, onChange}){

    return (
        <label className="input-custom-field">
            <input value={value} type="text" required onChange={onChange}/>
            <span className="input-placeholder">{placeholder}</span>
        </label>
    )
}

export default CSSModule(Input, styles)