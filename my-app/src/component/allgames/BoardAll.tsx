import React, { useState } from "react";
import Sqare from "./Sqare";
import { log } from "console";


export function BoardAll() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXPlayer, setPlayer] = useState(true);
    const [gameover, setGameOver] = useState(false);


    const resetState = () => {
        setState(Array(9).fill(null));
        console.log(state);
        setPlayer(true);
        setGameOver(false);
    }

    const handleClick = (index: number) => {
        if (state[index] != null) {
            return;
        }
        if (gameover) {
            return
        }
        console.log("Current player is: ", (isXPlayer ? "X" : "O"));

        if (isXPlayer) {
            console.log("X is set at index: ", index);
            state[index] = "X";

        } else {
            state[index] = "O";
            console.log("O is clicked at index: ", index);

        }
        const win = checkWinner();
        if (win) {
            alert("Player '" + (isXPlayer ? "X" : "O") + "' won the game");
            return;
        }

        setPlayer(!isXPlayer);
    }

    const checkWinner = () => {

        console.log("Checking who is the winner..");

        const winnerCoods = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winnerCoods.length; i++) {
            const [a, b, c] = winnerCoods[i];
            console.log("state[a] =", state[a], "state[b] =", state[b], "state[c] =", state[c]);
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                setGameOver(true);
                return true;
            }
        }
        return false;
    }


    return (
        <div className="board-container">
            <div className="m-2" hidden={gameover ? true : false}>
                {isXPlayer ? 'X' : 'O'} player's turn to move
            </div>

            <div className="m-2" hidden={gameover ? false : true}>
                Game is over and {isXPlayer ? 'X' : 'O'} won the game.
            </div>
            <div className="board-row">
                <Sqare value={state[0]} onClick={() => handleClick(0)} />
                <Sqare value={state[1]} onClick={() => handleClick(1)} />
                <Sqare value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Sqare value={state[3]} onClick={() => handleClick(3)} />
                <Sqare value={state[4]} onClick={() => handleClick(4)} />
                <Sqare value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Sqare value={state[6]} onClick={() => handleClick(6)} />
                <Sqare value={state[7]} onClick={() => handleClick(7)} />
                <Sqare value={state[8]} onClick={() => handleClick(8)} />
            </div>
            <button className="btn btn-primary m-2" onClick={resetState}>RESET GAME</button>
        </div>
    )
} 