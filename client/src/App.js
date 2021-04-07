import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"


import LogIn from "./components/LogIn"
import Chat from "./components/Chat"


export default function App()
{
    return (
        <Router>
            <Route path="/" exact component={LogIn}/>
            <Route path="/chat" component={Chat}/>
        </Router>
    );
}
