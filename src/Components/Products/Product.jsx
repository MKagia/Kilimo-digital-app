import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

const Product = (props) => {
  const { tool_id, tool_name, price_per_unit, toolimage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[tool_id];

  return (
    <div className='product'>
      <img src={toolimage} alt=''/>
      <div className='description'>
        <p> <b> {tool_name} </b> </p>
        <p> {price_per_unit} </p>

      </div>

      <button className='addToCartBttn' onClick={() => addToCart(tool_id)}>Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>


    </div>
    
  )
}

export default Product;



