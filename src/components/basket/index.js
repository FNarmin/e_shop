import { useProducts } from '../../context/PoductsContext';
import style from './basket.module.css'

const Basket = () => {
  const {state} = useProducts();
  // console.log(state.basket);
  const basketLength = state.basket.length;
  const price = state.count*state.basket.price;
  if (basketLength>0) { return (<div className={style.main}>
    <div className={style.basketItems}>
     <img src={state.basket[0].img} className={style.basketImg}></img>
     <p className={style.productName}>{state.basket[0].name}</p>
     <div className={style.count}>
       <button>-</button>
       <p>{state.basket[0].count}</p>
       <button>+</button>
     </div>
     <p className={style.price}>{state.basket[0].price*state.count}</p>
     <button className={style.deleteBtn}>delete</button>
    </div>
   </div>)} else {return (<div>Basket is empty</div>)}
  
}

export default Basket;