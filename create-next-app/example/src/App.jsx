import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Square = ({value, onSquareClick})=>{
  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

export default function App(){

  const [squares, setSquares] = useState(Array(9).fill(null));

  const onSquareClick=(i)=>{
    const nextSquares = squares.slice();
    nextSquares[i]="X";
    setSquares(nextSquares);
  } 

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}


