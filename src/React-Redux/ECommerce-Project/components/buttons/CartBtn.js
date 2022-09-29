import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

 
const CartBtn = () => {
    
    // addItems from reducers
    const state = useSelector((state) => state.addItems)
    return (
       
        <div>
           <NavLink to = '/cart' className='btn btn-primary ms-2 '>
            <span className='fa-solid fa-cart-shopping me-1'></span>Cart ({state.length})</NavLink>
        </div>
    );
}
 

 
export default CartBtn;