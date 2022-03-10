import React from 'react';
import './Cart.css'

const Cart = ({ cartitem, handleAddProduct, handleRemoveProduct }) => {

  const totalprice = cartitem.reduce((price, item) =>
    price + item.quantity * item.price, 0
  );
  return (
    <div className='cart-item'>
      <div className='cart-item-header'>
        cart
      </div>

      {cartitem.length === 0 && (
        <div className='cart-item-empty'>no item are add</div>
      )}

      <div>
        {cartitem.map((item) => (
          <div key={item.id} className="cart-item-list">
            <div className='cart-item-right-side'>
              <div className='cart-item-mark'>{item.mark}</div>
              <div className='cart-item-name'>{item.name}</div>
              <div className='cart-item-price'>
                ${item.price}
              </div>
            </div>
            <div className='cart-item-left-side'>
              <div className='cart-item-function'>
                <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button>
                <span className='item-quantity'>{item.quantity}</span>
                <button className='cart-item-remove' onClick={() => handleRemoveProduct(item)}>-</button>
              </div>
              <img className='cart-item-img' src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
      <div className='cart-item-total-price-name'>
        total price
        <div className='cart-item-total-price'>
          ${totalprice}
        </div>
      </div>

    </div>
  )
}

export default Cart