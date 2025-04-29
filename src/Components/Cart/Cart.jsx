import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import './Cart.css';
import { PRODUCTS } from "../tools";
import { ShopContext } from '../Context/ShopContext';
import CartItem from "./CartItem";
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.getElementById('root').setAttribute('inert', true);
    } else {
      document.getElementById('root').removeAttribute('inert');
    }
  }, [modalIsOpen]);

  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.tool_id] !== 0) {
            return <CartItem key={product.tool_id} data={product} />;
          } else {
            return null;
          }
        })}
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: Ksh{totalAmount}</p>
            <button onClick={() => navigate('/tools')}>Continue Shopping</button>
            <button onClick={() => setModalIsOpen(true)}>Checkout</button>
          </div>
        ) : (
          <div className="checkout">
            <h1>Your Shopping Cart is Empty</h1>
            <button onClick={() => navigate('/tools')}>Back to Shopping</button>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Checkout Modal"
        className="checkout-modal"
        overlayClassName="modal-overlay"
      >
        
        <h2>Confirm Checkout</h2>
        <p>Your total is: Ksh{totalAmount}</p>
        <div className="modal-buttons">
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
        <button onClick={() => alert("Checkout confirmed!")}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
