import React, { useContext } from "react";
import { store } from "../../App";

const ComponentA = () => {
    const theme1 = useContext(store)
    return (
        <div>
            
                <store.Consumer>
                    {
                        value=> <div> Component A- <b>{theme1.toUpperCase()}</b></div>

                    }   
                  
                </store.Consumer>
            
            <div>Component A</div>
        </div>
    )
}

export default ComponentA;