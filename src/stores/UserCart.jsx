
import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/mainComponents/Navbar';


const UserCart = () => {
    const {cartItems,addToCart,removeFromCart} = useCart();
  return (
    <>
    <Navbar/>
    <div>
       {
  cartItems.map( (item)=>{
    return (
        
        <div className='cart-section' >
            <div className="cart-image">
                <img src={item.image} alt="" />
            </div>
            <div className="cart-details">
                <h2> {item.product} </h2>
                <h2>{item.price} </h2>
                <h2>{item.company} </h2>
                <button onClick={ ()=>removeFromCart(item) } >Remove from cart</button>
            </div>

        </div>
    )
  } 
  )
       }
    </div>
    </>
    
  );
}

export default UserCart;
