
import React from "react";



interface IProps{
    value: string|null;
    // onClick: (value: any) => void;  or 
    onClick: () => void;
}



const  Sqare = (props: IProps)=> {
    return (

        // <div className="square" style={{ border: "1px solid", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="square" onClick={props.onClick}>   
            <h2>{props.value}</h2>
            
        </div>
    )

}


export default Sqare;
