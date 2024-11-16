
import React, { ChangeEvent, useState } from "react";
import { ILoginDetails } from "../models/ILoginDetails";

// If you are not using a separate js file as a model.
// interface IState{
//     user:{
//         email: string,
//         password: string
//     }
// }

// If you are using an interface separately..

interface Istate {
    user: ILoginDetails
}

export function UserLogin() {
    const [state, setState] = useState<Istate>({
        user: {
            email: '',
            password: ''
        }
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value,
            },
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(state.user)
    }

    return (
        <div className="container">
            <form className="card p-4 mt-4" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <input className="form-control mb-3" type="email" name="email" onChange={handleChange} value={state.user.email} />
                <input className="form-control mb-3" type="password" name="password" onChange={handleChange} value={state.user.password} />
                <button className="btn btn-success" type="submit" name="Login">Login</button>
            </form>

            <div>
                <p>{JSON.stringify(state.user)}</p>
            </div>

        </div>
    )
}
