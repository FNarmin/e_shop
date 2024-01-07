import { useContext, useEffect, useRef, useState } from "react";
import style from "./productCard.module.css";
import ProductsProvider from "../../context/PoductsContext";
import { useProducts } from "../../context/PoductsContext";
import { useCount } from "../../context/CountContext";

const ProductCard = () => {
  const{state, dispatch} = useProducts();
  const{counts, setCounts} = useCount();
  const count = counts;
  const decreaseCount = (index) =>{
    console.log(count);
    if (!count[index]==0) {
      count[index] -=1;
      setCounts(count);
    }
    dispatch({type: "DECREASE_COUNT", payload: {index, value: counts}});
  }
  console.log(counts);
  const increaseCount =(index) => {
    count[index] = count[index]+1;
    setCounts(count);
    dispatch({type: "INCREASE_COUNT", payload: {index,  value: counts}});
    
    console.log(count);
  }
  const addBasket =(index) => {
    dispatch({type: "ADD_BASKET", payload: {index}})
  }
  return (
    <>
    {state.products.map((product, index)=>(<div className={style.card} key={product.id}>
      <img src={product.img}></img>
      <h2 className={style.productName}>{product.name}</h2>
      <h2 className={style.price}>{product.price+"$"}</h2>
      <div className={style.changeCount}>
          <button className={style.decreas} onClick={()=>decreaseCount(index)}>-</button>
          <p>{counts[index]}</p>
          <button className={style.increas} onClick={()=>increaseCount(index)}>+</button>
      </div>
      <button className={style.add} 
      onClick={()=>addBasket(index)}
      >Add Basket</button>

  </div>))}
      
  </>
  )}

export default ProductCard