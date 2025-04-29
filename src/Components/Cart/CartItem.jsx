import React, { useContext } from "react";
import { ShopContext } from '../Context/ShopContext';


const CartItem = (props) => {
    const { tool_id, tool_name, price_per_unit, toolimage } = props.data;
    const { cartItems, removeFromCart, addToCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'>

        <img src={toolimage} alt=''/>
        <div className='description'>
            <p> <b> {tool_name} </b></p>
            <p> Ksh {price_per_unit}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(tool_id)}> - </button>
                <input value={cartItems[tool_id]} onChange={(e) => updateCartItemCount(Number(e.target.value), tool_id)}/>

                <button onClick={() => addToCart(tool_id)}> + </button>

            </div>

        </div>
    </div>
  )
}

export default CartItem;