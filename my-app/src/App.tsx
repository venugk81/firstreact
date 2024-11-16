import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from './component/MyButton';
import { MapUse } from './component/MapUse';
import { Counter } from './component/Counter';
import { Youtube } from './component/Youtube';
import { UserLogin } from './component/LoginForm';
import { Auth } from './component/Auth';
import { StudentDetails } from './component/StudenDetails';
import Square from './component/game/Square';
import Board from './component/game/Board';
import ThumbolaSquare from './component/thumbola/ThumbolaSquare';
import ThumbolaBoard from './component/thumbola/ThumbolaBoard';
import ButtonText from './component/thumbola/ButtonText';
import { BoardAll } from './component/allgames/BoardAll';
import Displayonclick from './component/allgames/Displayonclick';
import { Thumb } from './component/allgames/Thumb';
import { ThumbGame } from './component/allgames/ThumbGame';
import { ThumbGame2 } from './component/allgames/ThumbGame2';

import ComponentB from './component/contextapi/ComponentB';
import ComponentA from './component/contextapi/ComponentA';
import Counter1 from './component/contextapi/Counter1';
import { CompleteGame } from './component/finalgame/CompleteGame';


export const store = React.createContext<string>("true");


function App() {
  // const [data, setData] = useState("");
  const[theme, setValue] = useState<string>("true")
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <button className='btn btn-primary'>Hello, Click Me!!</button>
      </header> */}

      {/* <button className='btn btn-primary mb-2'>Hello, Click Me!!</button> <br/> */}
      {/* <MyButton  title="Title of the Button"/> */}
      {/* <MapUse/>
      <Counter/>
      <Youtube/> */}
      {/* <UserLogin/> */}
      <Auth />
      <StudentDetails />
      {/* <Thumb /> */}
      <br />
      {/* <BoardAll /> */}
      {/* Array List buttons */}
      {/* <Displayonclick /> */}

      {/* <h3>Game implementation</h3> */}
      {/* <ThumbGame /> */}

      <h3>Game implementation Copy</h3>
      <ThumbGame2 />

      <h3>Context Examples Here..</h3>
      <store.Provider value={theme}>
        <center>
          <h1>Value changing from Parent Component: {theme}</h1>

          <ComponentA />
          <ComponentB />

        </center>
      </store.Provider >
      <button className="btn btn-outline-info" onClick={() => {
        setValue(theme.toLowerCase() === "true" ?  "false" : "true");
      }}>Change Theme</button>

      <CompleteGame/>
      
    

    </div >
  );
}

export default App;
