import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cartImg from "../img/Cart.png";
import vsfImg from "../img/VSF.png";
import "./Navbar.css";

const Navbar = ({cartitem}) => {
 
  return (
    <header className='header'>
      <div className='header-links'>
        <ul>
          <li>
            <NavLink to="/women">women</NavLink>
          </li>
          <li>
            <NavLink to="/men">men</NavLink>
          </li>
          <li>
            <NavLink to="/kids">kids</NavLink>
          </li>
        </ul>
        <span>
          <img src={vsfImg} />
        </span>
        <ul>
          <li className="dropdown">
            <button className="dropbtn">$</button>
            <div className="dropdown-content">
              <a href="#">$ USD</a>
              <a href="#">€ EUR</a>
              <a href="#">¥ JPY</a>
            </div>
          </li>
          <li>
            <Link className='cart' to="/cart">
              <img src={cartImg} />
              <span className='cart-length'> 
                {cartitem.length === 0 ? "" : cartitem.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar