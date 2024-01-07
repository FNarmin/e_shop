import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Basket from './components/basket';
import { ProductsProvider } from './context/PoductsContext';
import CountProvider from './context/CountContext';

function App() {
  return (
    <ProductsProvider>
      <CountProvider>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/basket' element={<Basket/>}/>
  </Routes>
  </BrowserRouter>
  </CountProvider>
  </ProductsProvider>
  );
}

export default App;
