import React, { useContext } from "react";
import './Cart.css';
import { PRODUCTS } from "../tools";
import { ShopContext } from '../Context/ShopContext';
import CartItem from "./CartItem";
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  const navigate = useNavigate()
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
      {totalAmount > 0 ? (
        <div className="checkout">
        
          <p>
            Subtotal: Ksh{totalAmount}
          </p>
          <button onClick={() => navigate('/tools')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <h1> Your Shopping Cart is Empty</h1>
          <button onClick={() => navigate('/tools')}>Back to Shopping</button>
        </div>
        
      )}

      </div>
    </div>
    
  )
}

export default Cart;