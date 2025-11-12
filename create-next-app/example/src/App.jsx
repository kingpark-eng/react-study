import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Square = ()=>{

  const [value, setValue] = useState(null);

  const handleClick = ()=>{
    setValue('X');
  }

  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function App(){

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}


