import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import { useProducts } from '../../context/PoductsContext';

const Navbar = () => {
  const {state} = useProducts()
  return (
    <div className={style.header}>
        <ul className={style.ul}>
            <li><p className={style.logo}>E-commerce</p></li>
            <li><Link to="/" className={style.link}><p>Home</p></Link></li>
            <li><Link to="/basket" className={style.link}><div className={style.basket}><p>Basket</p><p className={style.basketCount}>{state.basketCount}</p></div></Link></li>
        </ul>
    </div>
  )
}

export default Navbar;
