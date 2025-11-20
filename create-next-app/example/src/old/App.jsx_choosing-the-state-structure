import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://ko.react.dev/learn/choosing-the-state-structure
// React에서는 이러한 컴포넌트별 메모리를 state라고 부름

export default function FeedbackForm() {
  const [text, setText] = useState('입력해주세요.');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e){
    e.preventDefault(); //기본 submit 동작(새로고침) 막기
    setIsSending(true);
    await sendMessage(text);  //비동기처리
    setIsSending(false);
    setIsSent(true);
  }

  if(isSent){
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea onChange={(e)=>setText(e.target.value)} value={text} disabled={isSending}></textarea><br/>
        <button type="submit" disabled={isSending}>send</button>
        {isSending && <p>Sending...</p>}
      </form>
    </>
  );
}

const sendMessage=(text)=>{
  return new Promise(resolve=>{   //new Promise((resolve, reject) => {})
    setTimeout(resolve, 2000);
  });
}
