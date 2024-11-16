

import React, { useState } from "react";
import { IStudentDetails } from "./IStudentDetails";

interface IState{
    users: IStudentDetails[];
}

export function StudentDetails(){
    const[state, setState] = useState<IState>(
        {
            users:[
                {sno: 1, name: "v", age: 20},
                {sno: 2, name: "g", age: 25},
            ]
        }
    )

    return(
        <div className="container">
                <h1>Table data Iteration</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SNO</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.users.length > 0 && state.users.map(user => (
                                <tr key={user.sno}>
                                    <td>{user.sno}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>                                
                                </tr>
                          ))
                        }
                    </tbody>
                </table>    
        </div>
    )  
}