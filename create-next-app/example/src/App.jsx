import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://ko.react.dev/learn/choosing-the-state-structure 챌린지 2 of 4: 깨진 포장 목록 수정하기 
// React에서는 이러한 컴포넌트별 메모리를 state라고 부름

//첫번째 체크박스는 체크가 되어잇어야함.
export default function TravelPlan(){
 //체크된 갯수 카운터
 const [checkCnt, setCheckCnt] = useState(0);
 const [totalPack, setTotalPack] = useState(3);

 return(
  <div>
    <input type="text" placeholder='Add item'></input>{' '}<button key="1">Add</button>
    <br/>
      <input type="checkbox" value="Warm socks" onChange={(e)=>{if(e.target.checked){setCheckCnt(checkCnt+1)}else{setCheckCnt(checkCnt-1)}}}></input>{' '}Warm socks<button>Delete</button><br/>
      <input type="checkbox" value="Travel journal"></input>{' '}Travel journal<button>Delete</button><br/>
      <input type="checkbox" value="Watercolors"></input>{' '}Watercolors<button>Delete</button>
    <br/>
    <hr/>
    {checkCnt} out of {totalPack}packed!
  </div>
 )
}

