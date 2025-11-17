import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://ko.react.dev/learn/thinking-in-react
const ProductCategoryRow=({category})=>{
  return (
    <tr>
      <th colspan="2">{category}</th>
    </tr>
  );
}

const ProductRow=({product})=>{

  const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const SearchBar=({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange})=>{
  return (
    <form>
      <input type='text' placeholder='Search...' value={filterText} onChange={(e)=>onFilterTextChange(e.target.value)}/><p></p>
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={(e)=>onInStockOnlyChange(e.target.checked)}/>{' '}Only show products in stock
      </label>
    </form>
  );
}

const ProductTable=({products})=>{
  const rows=[];
  let lastCategory=null;

  // map((element, index, array)=>{   //현재 요소, 현재 인덱스, 원본 배열 전체
  // foreach() => 요소를 돌리고 배열을 반환하지않음.
  products.forEach((element)=> {
    if(element.category !== lastCategory){
      rows.push(
        <ProductCategoryRow category={element.category} key={element.category}/>
      );
    }
    rows.push(
      <ProductRow product={element} key={element.name} />
    );       
    lastCategory=element.category;
  });  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const FilterableProductTable=({products})=>{
  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}/>
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
    </>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}


