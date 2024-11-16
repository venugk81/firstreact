import { count } from "console"
import React, { useState }  from "react"
interface IState{
    count: number
}
interface IProps{}




export function Counter(){
    const[state, setState] = useState<IState>({count:0})
    
    const handleIncrement=()=>{
        setState({count: state.count + 1});
        
    }

    const handleDecrement=()=>{
        setState({count: state.count - 1});
        
    }
    
    
    


    return(
        <div>

        <h1>Event Handling</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h2>{state.count}</h2>
                        <button name="inc" className="btn btn-success ms-3 " onClick={handleIncrement} >Increment</button>
                        <button name="inc" className="btn btn-danger ms-3" onClick={handleDecrement} >Decrement</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}
