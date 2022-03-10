import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../Product/Product';
import Men from "./Men";
import Kids from "./Kids";
import Cart from "./Cart";

const Poutes = ({productitems,cartitem,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
      <Routes>
        <Route path='/Women' element={<Product productitems={productitems} handleAddProduct={handleAddProduct}/>}/>       
        <Route path='/men' element={<Men />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/cart'
         element={
         <Cart 
         cartitem={cartitem}
         handleAddProduct={handleAddProduct}
         handleRemoveProduct={handleRemoveProduct}
         />} />
      </Routes>
    </div>
  )
}

export default Poutes