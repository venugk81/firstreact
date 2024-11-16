import React, { createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props: string) => {
    return(
        // <><CounterContext.Provider value={""}>
        //     {props.children}
        // </CounterContext.Provider><h1></h1></>
        <h1></h1>
    )
}