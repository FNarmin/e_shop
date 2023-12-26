import ProductCard from '../productCard';
import style from './home.module.css';
import ProductsProvider from '../../context/PoductsContext';
import { useProducts } from '../../context/PoductsContext';
const Home = () => {
  return (
    <div className={style.body}>
    <ProductCard/>
    </div>
  )
}

export default Home;