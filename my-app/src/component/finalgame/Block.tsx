import React from "react";

interface IProps{
    val: number
}

export function Block(props: IProps){

    return(
        <div className="square1" onClick={()=>alert(props.val)}>
            {props.val}
        </div>
    )
}