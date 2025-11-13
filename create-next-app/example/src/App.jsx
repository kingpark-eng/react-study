import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'
import calculateWinner from './components/CalculateWinner'

function Board({xIsNext, squares, onPlay}){
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  //이벤트 처리함수는 handle명칭사용
  const handleClick=(i)=>{
    if(squares[i] || calculateWinner(squares)){
      return;
    } 
    const nextSquares = squares.slice();  //배열 복사
    if(xIsNext){
      nextSquares[i]='X';
    }else{
      nextSquares[i]='O';
    }
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
    onPlay(nextSquares);
  } 

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay=(nextSquares)=>{
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const jumpTo=(nextMove)=>{

  }

  const moves = history.map((squares,move)=>{
    let description;
    if(move>0){
      description = 'Go to move #' + move;
    }else{
      description = 'Go to game start';
    }

    return(
      <li>
        <button onClick={()=>jumpTo(move)}>{description}</button>
      </li>
    )

  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );  
}


