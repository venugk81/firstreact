import { log } from "util";
import { Cell } from "./Cell"
// https://medium.com/@TheRealScoop/how-to-loop-inside-of-react-jsx-tsx-1a95aa8ccdee

export function Thumb() {
    const nums1 = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    ]

    const numbersClicked: number[] = [];

    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const buildUI = () => {
        for (let i = 0; i < nums1.length; i++) {
            <Cell val={i} />
        }
    }

    const buildBoxes = () => {
        return nums1.map((arr) => {
            return arr.map((num) => {
                return <Cell val={num} />
            })
        })
    }

    const parentDiv = () => {
        // for(let i=0; i<nums1.length; i++){
        //     return childDiv(nums1[i]);
        // }

        return nums1.map((num) => {
            childDiv(num);
        })

    }

    const childDiv = (arrX: number[]) => {
        // for (let i = 0;  i< arrX.length; i++) {
        //     return <Cell val={i} />
        // }

        return arrX.map((num) => {
            return <Cell val={num} />

        })
    }

    const getButtonsUsingMap = () => {
        const array = [1, 2, 3, 4, 5]

        return array.map((number) => {
            return <div className="board-row" >{number}</div>
        })
    }

    const numbersRevealed = (num: number) => {
        if (numbersClicked.indexOf(num)>=0){
            return;
        }
        numbersClicked.push(num)
        console.log(numbersClicked);

        alert("Number clicked: " + num);
    }

    return (
        <div className="container-board">
            {/* <div className="square"> */}
            {/* {buildBoxes()} */}
            {/* </div> */}

            <div>
                {
                    // arr2.map((val, ind) => <button className="square" key={ind}>{val}</button>)
                }
            </div>

            {/* {childDiv(arr2)} */}
            <div>
                {
                    nums1.map((ar, ind1) => <div>
                        {
                            ar.map((ar2, ind2) =>
                                <button
                                    className="square1"
                                    onClick={() => numbersRevealed(ar2)}
                                    name={ar2.toString()}
                                    key={ind2}
                                >
                                    {numbersClicked.indexOf(ar2) ? ar2 : null}
                                </button>
                            )
                        }
                    </div>)
                }
            </div>
        </div>
    )
}