import React, { useState } from "react";

const Displayonclick = () => {

    const [lst, setLst] = useState([1, 2, 3, 4, 5, 6,7,8,9, 10]);
    const [selected, getSelected] = useState<number[]>([]);
    // const [selected, getSelected] = useState([] as any);

    const numbersClicked: number[] = [];


    const [text, setText] = useState("");

    const incrementArray = () => {
        // setLst(f => [...lst, 1]);
        setLst(f => [...lst, Math.floor(Math.random() * 100)]);
        console.log(lst);


    }

    const addClickedNumber = (val: number) => {
        console.log( val);
        
        console.log("before: ", selected);
        
        // getSelected(f => [...selected, val]);
        if(selected.includes(val)){
            return;
        }else{
            getSelected(f => [...selected, val]);
        }
        // if(selected.find((ele) => ele === val)){
        //     console.log("After: ", selected);
        // }else{
        //     console.log("find method");
        // }

        console.log("After: ", selected);
    }

    //to remove an array element: 
    // https://www.youtube.com/watch?v=98yq3Mp6kxs

    return (
        <div>
            <h1>Array List buttons</h1>
            <div>
                {
                    lst.map((listItem, index) =>
                        <button className="square1"
                            onClick={() => addClickedNumber(listItem)}
                            key={index}
                        >{selected.includes(listItem) ? listItem : null}</button>)
                }
            </div>

        </div>
    )


}

export default Displayonclick;