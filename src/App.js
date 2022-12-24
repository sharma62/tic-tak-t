
import { useState } from 'react';
import './App.css';
import SquareComponent from './SquareComponent';
const initialState = ["","","","","","","","",""]

function App() {
  const [gameState,updateGameState] =useState(initialState);
  const [X,UpdateX]=useState(false);
   
 const onSquareClick =(indx)=>{
  let string =Array.from(gameState);
  string[indx]= X ? "X":"0";
  updateGameState(string);
  UpdateX(!X);
  }

  return ( 
    <>
    <div className="App">
      <header className="App-header">
      <label htmlFor="" className='App-link'>Developed : Code With Suraj</label>
        <h1>Tic Tac Toe</h1>
        <div className="jc-center row border-bottom" >
          <SquareComponent class='border-right' state={gameState[0]} onClick={()=>{onSquareClick(0)}} />
          <SquareComponent class='border-right' state={gameState[1]} onClick={()=>{onSquareClick(1)}}/>
          <SquareComponent state={gameState[2]} onClick={()=>{onSquareClick(2)}}/>
        </div>
        <div className="jc-center row  border-bottom">
          <SquareComponent class='border-right' state={gameState[3]} onClick={()=>{onSquareClick(3)}}/>
          <SquareComponent class='border-right' state={gameState[4]} onClick={()=>{onSquareClick(4)}}/>
          <SquareComponent state={gameState[5]} onClick={()=>{onSquareClick(5)}}/>
        </div>
        <div className="jc-center row  ">
          <SquareComponent class='border-right' state={gameState[6]} onClick={()=>{onSquareClick(6)}}/>
          <SquareComponent class='border-right' state={gameState[7]} onClick={()=>{onSquareClick(7)}}/>
          <SquareComponent state={gameState[8]} onClick={()=>{onSquareClick(8f)}}/>
        </div>
        <br /><br /><br />
        <button type="reset">New Game </button>
      </header>
    </div>
    </>
  );
}

export default App;
