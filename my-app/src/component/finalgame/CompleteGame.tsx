
import { useState } from "react";

// https://medium.com/@TheRealScoop/how-to-loop-inside-of-react-jsx-tsx-1a95aa8ccdee

export function CompleteGame() {
    const nums1 = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    ]

    // const numbersClicked: number[] = [];  
    //used
    const [selectedNums, getSelectedNums] = useState<number[]>([]);

    // const getDataFromChild = (data1: number)=>{
    //     console.log(data1);
    // }

    
// used method
    const numbersRevealed = (num: number) => {
        if (selectedNums.indexOf(num) >= 0) {
            return;
        }
        getSelectedNums(f => [...selectedNums, num]);
        console.log(selectedNums);
       
    }

    return (
        <div className="board-container">
            <h1>Game from Complete Game TSX file.. CompleteGame.tsx</h1>
            {
                nums1.map((ar, ind1) => <div key={ind1}>
                    {
                        <div className="board-row" >
                            {
                                ar.map((item, ind2) =>
                                    <div
                                        className="square1"
                                        onClick={() => numbersRevealed(item)}
                                        id={item.toString()}
                                        key={ind2}
                                    >
                                        {selectedNums.includes(item) ? item : null}
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>)
            }

        </div>
    )
}