import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {deleteItem} from '../Redux/actions/index'
 
const Cart = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.addItems)
    console.log('state', state);

    // handleClose

    const handleClose = (item) => {
        dispatch(deleteItem(item))
        
        
    }

    // cartItem

    // if item is there in the cart, display item details

    const cartItems = (cartItem) => {
        return(
            <>
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className='container py-4'>
                    <button onClick = {() => handleClose(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                       <div className='col-md-4'>
                        <img src={cartItem.img} alt={cartItem.title}  style={{width:'200px', height:'200px'}}/>
                       </div>

                       
                        <div className='col-md-4'>
                            <h3 className=''>{cartItem.title}</h3>
                            <p className='lead fw-bold'>${cartItem.price}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
        )

    }
    // if no items in the cart show message 'your cart is empty'

    const emptyCart = () => {
        return (
            <div className="px-4 py-5 my-5 bg-light rounded-3">
                <div className='container py-4'>
                    <div className='row'>
                       <h3>Your Cart is Empty</h3> 
                    </div>
                </div>
            </div>
        )
        
    }

    const button = () => {
        return(
        <div className='container'>
            <div className='row'>
                <NavLink to = '/checkout' className='mx-auto mb-5 btn btn-primary w-25'>Proceed to Checkout</NavLink>
            </div>
        </div>
        )
        
    }
    
    return (
        <div>
            
            {state.length === 0 && emptyCart()}
            {state.length !==0 && state.map(cartItems)}

            {state.length !==0 && button()}
           
        </div>
    );
}
 

 
export default Cart;