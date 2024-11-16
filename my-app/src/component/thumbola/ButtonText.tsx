import React, { useState } from "react";

const ButtonText=()=>{

    const arrButtons = [1,2,3,4,5,6,7,8,9,10]
    const arrOpenedButtons: number[] =[];

    const [arrCheck, setArrCheck] = useState([]);
    
    const displayButtonText =()=>{
        setText("Hello");
    }


    const [text, setText] = useState("");

    const openeButtons =(idVal: number)=>{
        if(!arrOpenedButtons.includes(idVal)){
            arrOpenedButtons.push(idVal);

            // setArrCheck(arrCheck => [...arrCheck, id]);
           
            // https://www.youtube.com/watch?v=mehy2XPaByI
            // https://www.youtube.com/watch?v=Xb_4cWt1Qww
            
            // https://www.youtube.com/watch?v=RZ5wKYbOM_I

            console.log("ID: "+ idVal + " is added to the list.");
            console.log(arrOpenedButtons);
        }else{
            console.log("ID: "+ idVal + " is already added to the list.");
            console.log(arrOpenedButtons);            
        }
    }

    // const addItem= (idVal) =>{
    //     setArrCheck([...arrCheck, {
    //         id: arrCheck.length,
    //         value: idVal
    //     }])
    // }

    return(
        <div className="container" >
            <div >
            {
                arrButtons.map(id => 
                (
                    <div className="square" key={id} onClick={()=> openeButtons(id)}>{arrOpenedButtons.includes(id) ? id : id}</div>
                )
            )}
            </div>
            <button className = "square m-4" name="testing" onClick={displayButtonText}>{text}</button>

        </div>
    )
    

}

export default ButtonText;