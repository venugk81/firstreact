import React, { useState } from "react";
import ThumbolaSquare from "./ThumbolaSquare";
// https://www.youtube.com/watch?v=FIp2osib6KM&t=15s
const ThumbolaBoard=()=>{

    const[state, setState] = useState(Array(9).fill(null));
    console.log(state);
    const[isXTurn, setPlayer] = useState(true);

    const handleClick=(index:number)=>{
        if(state[index]!=null){
            console.log("You cant change a value in the cell: ", index);
            return;
        }
        console.log("Clicked in ${index} square")
        if(isXTurn){
            state[index]="X";
            console.log("X is set in index: "+ index);
            
        }else{
            state[index]="O";
            console.log("O is set in index: "+ index);
        }
        setPlayer(!isXTurn);
        console.log(state);
    }

    const resetGame=()=>{
        setState(Array(9).fill(null));
    }


    return(
        <div className="container">
            <div className="board">
                <ThumbolaSquare onClick={()=> handleClick(0)} value={state[0]} />
                <ThumbolaSquare value={state[1]} onClick={()=> handleClick(1)}/>
                <ThumbolaSquare value={state[2]} onClick={()=> handleClick(2)}/>
            </div>
            <div className="board">
                <ThumbolaSquare value={state[3]} onClick={()=> handleClick(3)}/>
                <ThumbolaSquare value={state[4]} onClick={()=> handleClick(4)}/>
                <ThumbolaSquare value={state[5]} onClick={()=> handleClick(5)}/>
            </div>
            <div className="board">
                <ThumbolaSquare value={state[6]} onClick={()=> handleClick(6)}/>
                <ThumbolaSquare value={state[7]} onClick={()=> handleClick(7)}/>
                <ThumbolaSquare value={state[8]} onClick={()=> handleClick(8)}/>
            </div>
            <button className="btn btn-primary" onClick={resetGame}>Reset Game</button>
        </div>
    )
}

export default ThumbolaBoard;