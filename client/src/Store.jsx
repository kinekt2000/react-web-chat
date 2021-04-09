import React, { useState } from "react"

const initialState = {
    username: ""
}

export const Context = React.createContext({}); 

const Store = ({children}) => {
    const [state, SetState] = useState(initialState)
    return(
        <Context.Provider value={[state, SetState]}>
            {children}
        </Context.Provider>
    )
}

export default Store;