import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>selected items: {quantity}</p> 
            <p>Total Price: ${total}</p>
            <p>Total shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;