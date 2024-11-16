import React, { useState } from "react";


//Generates random numbers from 1- 90 and gives an array of random numbers
//Iterate through it and then we can use the index to play the game..
const ComponentB = () => {
    const arr: number[] = [];
    let existingNumbers: number[] = [];
    let num: number;
    const [arrNums, setArrNums] = useState<number[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [val, setVal] = useState<number>();



    const generateNumbers = (min: number, max: number) => {
        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("x: ", x);
        return x;
    }

    const getNext = () => {
        console.log("Index length: " + index, " and length of an array: ", arrNums.length);
        if (arrNums.length === 90) {
            if (index === 90) {
                console.log("Game is over");
                
                return
            }
            setIndex(index + 1);
            console.log("arrNums.at(index) ", index, " is ", arrNums.at(index));
            setVal(arrNums.at(index))
        } else {
            console.log("Start the game first..");

        }
    }

    const resetGame = () => {
        setArrNums([]);
        setIndex(0);
        setVal(-1);
        existingNumbers = [];

    }

    const checkExistingnumbersAndAddNumbers = () => {
        while (existingNumbers.length < 90) {
            num = generateNumbers(1, 90);
            if (existingNumbers.length === 0) {
                existingNumbers.push(num);
            } else if (existingNumbers.indexOf(num) == -1) {
                existingNumbers.push(num);
            } else {
                console.log("Number is already added to an array: ", num);
            }
        }
        console.log("Existing numbers: ", existingNumbers);
        setArrNums(existingNumbers);
        return arrNums;
    }


    return (
        <div>
            <h1>Component B</h1>
            <button className="btn btn-success" onClick={checkExistingnumbersAndAddNumbers}>Generate Numbers</button>
            <button className="btn btn-primary m-2" onClick={getNext} >Get Next Number: {index} & number: {val}</button>
            <button className="btn btn-danger m-2" onClick={resetGame} > Reset Game</button>
        </div>
    )
}

export default ComponentB;