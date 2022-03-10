import React, { useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import data from './Mydata/data';
import Poutes from './component/Poutes'



const App = () => {
  const { productitems } = data;
  const [cartitem, setcartitem] = useState([]);
  const handleAddProduct = (product) => {
    const productexit = cartitem.find((item) => item.id === product.id);
    if (productexit) {
      setcartitem(cartitem.map((item) => item.id === product.id ?
        { ...productexit, quantity: productexit.quantity + 1 } : item
      ))
 
    } else {
      setcartitem([...cartitem, { ...product, quantity: 1 }])
    }
  }
  const handleRemoveProduct = (product) => {
    const productexit = cartitem.find((item) => item.id === product.id);
    if (productexit.quantity === 1) {
      setcartitem(cartitem.filter((item) => item.id !== product.id));
    } else {
      setcartitem(cartitem.map((item) => item.id === product.id ?
        { ...productexit, quantity: productexit.quantity - 1 } : item
      ))
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar cartitem={cartitem} />
        <Poutes
          productitems={productitems}
          cartitem={cartitem}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />

      </BrowserRouter>
    </div>
  )
}


export default App;
