import React, { MouseEventHandler } from "react";

interface IProps{
    onClick?: (value: any) => void;
  
    value: number
}

const Square=(props:IProps)=>{

    return(
        <div className="square" onClick={props.onClick}>
        {props.value}
        </div>
    )
}

export default Square;