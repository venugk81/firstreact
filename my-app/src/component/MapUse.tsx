import React from "react";

export function MapUse() {
    const arr =["react js", "react native", "java", "python"];

    const mp1 = [
        {
            name: "venu",
            id: 123
        },
        {
            name: "gopi",
            id: 345
        },
        {
            name: "krishna",
            id: 788
        }
    ];


    return(
        <div>
            {/* <ul>
            {
                arr.map(
                    (value, index) => <li key={index}>{value}</li>
                )
            }
            </ul> */}
            {/* <div>=====================================</div> */}
            <hr/>

            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    
                {
                    
                    mp1.map(
                        (value) => <tr key={value.id}>
                            <td className="table-info">{value.id}</td>
                            <td>{value.name}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <hr/>
            
        </div>
    )
}