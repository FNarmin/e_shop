import { useContext, useState } from "react";
import style from "./productCard.module.css";
import ProductsProvider from "../../context/PoductsContext";
import { useProducts } from "../../context/PoductsContext";

const ProductCard = () => {
  const{state, initialValues, increaseCount, decreaseCount, addBasket} = useProducts();
const price = state.count>0 ?state.products.price*state.count :state.products.price;
  return (
      <div className={style.card}>
      <img src={state.products.img}></img>
      <h2 className={style.productName}>{state.products.name}</h2>
      <h2 className={style.price}>{price}</h2>
      <div className={style.changeCount}>
          <button className={style.decreas} onClick={decreaseCount} >-</button>
          <p>{state.count}</p>
          <button className={style.increas} onClick={increaseCount}>+</button>
      </div>
      <button className={style.add} onClick={()=>addBasket(state.products.id)}>Add Basket</button>

  </div>
  )}

export default ProductCard