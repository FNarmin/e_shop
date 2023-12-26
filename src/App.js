import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Basket from './components/basket';
import { ProductsProvider } from './context/PoductsContext';

function App() {
  return (
    <ProductsProvider>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/basket' element={<Basket/>}/>
  </Routes>
  </BrowserRouter>
  </ProductsProvider>
  );
}

export default App;
