import { useState } from "react"

interface IState{
    message: string
}

export function Youtube()
{
    const[state, setMessage] = useState<IState>({message:"Welcome!"})
    
    const handleMessage =(greet: string):void =>{
        setMessage({message:greet})
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body">
                        <h1>{state.message}</h1>
                        <button className="btn btn-danger ms-2" onClick={()=>handleMessage('Like')}>LIKE</button>
                        <button className="btn btn-success ms-2" onClick={()=>handleMessage('Comment')}>Comment</button>
                        <button className="btn btn-info ms-2" onClick={()=>handleMessage('Share')}>Share</button>
                    </div>


                </div>
            </div>
        </div>
    )
}