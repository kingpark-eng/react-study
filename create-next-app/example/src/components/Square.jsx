//이벤트 prop는 on명칭사용
const Square = ({value, onSquareClick})=>{
  return (<button className="square" onClick={onSquareClick}>{value}</button>);
} 

