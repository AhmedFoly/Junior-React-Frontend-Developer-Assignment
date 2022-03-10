import React from 'react';
import './Product.css';
import Cart from '../img/EmptyCart.png';

const Product = ({ productitems, handleAddProduct }) => {
  return (
    <div className='product'>
      {productitems.map((productitem) => (
        <div key={productitem.id} className='card'>
          <div>
            <img className='product-img' src={productitem.img} alt={productitem.mark + " " + productitem.name} />
          </div>

          <div>
            <h3 className='product-name'>
            {productitem.mark + " " + productitem.name}
            </h3>
          </div>

          <div className='product-price'>
            $ {productitem.price}
          </div>
          <div className='product-add-cart'>
            <button onClick={() => handleAddProduct(productitem)}>
              <img src={Cart} alt='' />
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Product