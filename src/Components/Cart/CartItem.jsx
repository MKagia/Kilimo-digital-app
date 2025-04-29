import React from 'react'

const CartItem = (props) => {
    const { tool_name, price_per_unit } = props.data;


  return (
    <div className='cartItem'>

        <img src='toolimage' alt=''/>
        <div className='description'>
            <p> <b> {tool_name} </b></p>
            <p> Ksh {price_per_unit}</p>

        </div>
    </div>
  )
}

export default CartItem;