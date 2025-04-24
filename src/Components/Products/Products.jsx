import React from 'react'
import './Products.css'
import product_1 from '../../Assets/Borehole Drilling.png'
import product_2 from '../../Assets/Chuff Cutter.png'
import product_3 from '../../Assets/Drip irrigation.png'


const Products = () => {
  return (
    <div className='products'>
        <div className="product">
            <img src={product_1} alt="" />
        </div>
        <div className="product">
            <img src={product_2} alt="" />
        </div>
        <div className="product">
            <img src={product_3} alt="" />
        </div>


    </div>
  )
}

export default Products;
