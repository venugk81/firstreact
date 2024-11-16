import React, { useState } from "react"

interface IState {
    isLogin: boolean;
}

export function Auth() {
    // const[state, setState] = useState(false); or
    const [state, setState] = useState<IState>({
        isLogin: false
    })

    const onLogin = (): void => {
        setState({
            isLogin: true
        })
    }
    const onLogout = (): void => {
        setState({
            isLogin: false
        })
    }

    return (
        <div className="container">
            <div className="row card p-4 mt-4">
                <div className="col-6">
                    {
                        (state.isLogin) ?
                            (<h1>Welcome User</h1>) :
                            (<h1>Please login first</h1>)
                    }
                    {
                        state.isLogin ?
                            (<button className="btn btn-danger m-3" onClick={onLogout}>Logout</button>) :
                            (<button className="btn btn-primary m-3" onClick={onLogin}>Login</button>)
                    }
                    <p>{state.isLogin ? "Logged in successfully!": "Logged out successfully!"}</p>
                </div>
            </div>
        </div>
    )
}