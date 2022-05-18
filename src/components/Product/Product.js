import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <h4>Price: ${price}</h4>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.product)} className="btn-cart">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;