import React from "react";


interface IProps{
    val: number
}

const AnotherComponent=(props: IProps)=>{
    return(
        <div>
            <h1>Another Child Component</h1>
            <h2> Number selected: 1</h2>
            <button>Generate Number: </button>
        </div>
    )
}

export default AnotherComponent;