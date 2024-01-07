import { useCount } from '../../context/CountContext';
import { useProducts } from '../../context/PoductsContext';
import style from './basket.module.css'

const Basket = () => {
  const { state, dispatch } = useProducts();
  const {counts, setCounts} = useCount();
  const count = [];
  state.products.map(a=>{count.push(a.count)});
  console.log(count)
  
  const decreaseCount = (index) =>{
    if (!count[index]==0) {
      count[index] -=1;
      setCounts(count);
    }
    dispatch({type: "DECREASE_BASKET", payload: {index, value: counts}});
  }
  const increaseCount =(index) => {
    count[index] = count[index]+1;
    setCounts(count);
    dispatch({type: "INCREASE_BASKET", payload: {index,  value: counts}});
  }
  const deleteProduct = (index) => {
    count[index] = 0;
    setCounts(count);
    dispatch({type: "DELETE_PRODUCT", payload: {index,  value: counts}});
  }

  return (
    <div>
      {state.products.map((product, index) => (product.count > 0 ? (<div key={index} className={style.basketItems}>
        <img src={product.img} className={style.basketImg} />
        <p className={style.productName}>{product.name}</p>
        <div className={style.count}>
          <button onClick={()=>decreaseCount(index)}>-</button>
          <p>{counts[index]}</p>
          <button onClick={()=>increaseCount(index)}>+</button>
        </div>
        <p className={style.price}>{product.price * product.count}</p>
        <button onClick={()=>deleteProduct(index)} className={style.deleteBtn}>delete</button>
      </div>) : (<div></div>)))}
    </div>)
}

export default Basket;