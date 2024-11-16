import React, { useState } from "react";

const ButtonText=()=>{

    const[lst, setLst] = useState([1,2,3,4,5]);


    
    const displayButtonText =()=>{
        setText("Hello");
    }


    const [text, setText] = useState("");

    const incrementArray =()=>{
        // setLst(f => [...lst, 1]);
        setLst(f => [...lst, Math.floor(Math.random() * 100)]);
        console.log(lst);

    }

    return(
        <div>
            <h1>Array List buttons</h1>
            <div>
            <button className = "square" name="testing" onClick={displayButtonText}>{text}</button>
            </div>
            <button className="btn btn-primary" name="Increment Array" onClick={incrementArray}>Increment Array</button>
            
            <div>
            {
                lst.map((listItem, index) => <button className="square" key={index}>{listItem}</button>)
            }
            </div>
            
        </div>
    )
    

}

export default ButtonText;