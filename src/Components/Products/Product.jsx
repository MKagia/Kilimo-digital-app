import React from 'react'

const Product = (props) => {
  const { tool_name, price_per_unit, toolimage } = props.data;
  return (
    <div className='product'>
      <img src={toolimage} alt=''/>
      <div className='description'>
        <p> <b> {tool_name} </b> </p>
        <p> {price_per_unit} </p>

      </div>

      <button className='addToCartBttn'>Add To Cart</button>


    </div>
    
  )
}

export default Product;



