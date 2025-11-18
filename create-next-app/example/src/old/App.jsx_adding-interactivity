import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://ko.react.dev/learn/adding-interactivity
// React에서는 이러한 컴포넌트별 메모리를 state라고 부름

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick(){
    if(hasNext){
      setIndex(index+1);
    } else{
      setIndex(0);
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleMoreClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
         by {sculpture.artist}
      </h2>
      <h3>({index+1} of {sculptureList.length}) </h3>
      <button onclick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.img} alt={sculpture.alt}></img>
    </>
  );
}


