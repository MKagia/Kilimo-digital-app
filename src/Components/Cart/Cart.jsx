import React, { useContext } from "react";
import './Cart.css';
import { PRODUCTS } from "../tools";
import { ShopContext } from '../Context/ShopContext';
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);


  return (
    <div className='cart'>
      <div>
      <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((product) => {
          if (cartItems[product.tool_id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}

      </div>
    </div>
    
  )
}

export default Cart;