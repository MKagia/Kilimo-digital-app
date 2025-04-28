import React from 'react';
import './Products.css';
import { PRODUCTS } from "../tools";
import Product from "./Product";


const Products = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
      <h1>Our Products</h1>
      </div>
    <div className='products'>
      {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
    </div>


    </div>
  )
}

export default Products;