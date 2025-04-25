import React from 'react'
import './Products.css'
import product_1 from '../../Assets/Borehole Drilling.png'
import product_2 from '../../Assets/Chuff Cutter.png'
import product_3 from '../../Assets/Drip irrigation.png'
import product_icon_1 from '../../Assets/Cart-Icon.svg'


const Products = () => {
  return (
    <div className='products'>
        <div className="product">
            <img src={product_1} alt="" />
            <div className='caption'>
                <img src={product_icon_1} alt="" />
                <p>Borehole Drilling Machine</p>
            </div>
        </div>
        <div className="product">
            <img src={product_2} alt="" />
            <div className='caption'>
                <img src={product_icon_1} alt="" />
                <p>Chuff Cutter</p>
            </div>
            
        </div>
        <div className="product">
            <img src={product_3} alt="" />
            <div className='caption'>
                <img src={product_icon_1} alt="" />
                <p>Drip Irrigation</p>
            </div>
        </div>


    </div>
  )
}

export default Products;
