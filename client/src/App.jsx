import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"


import LogIn from "./components/LogIn"
import Chat from "./components/Chat"
import Store from "./Store"

import "./index.css"

export default function App() {

    return (
        <Store>
            <Router>
                <Route path="/" exact component={LogIn} />
                <Route path="/chat" component={Chat} />
            </Router>
        </Store>
    );
}
