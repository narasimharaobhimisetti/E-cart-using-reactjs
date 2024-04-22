

import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { kitchenData } from '../../data/kitchen';
import { useCart } from '../../context/CartContext';



const KitchenSingle = () => {
  const{cartItems,addToCart} =useCart()
    const navigate =useNavigate()
    const {id} = useParams()
    const data = kitchenData.find( (item) => item.id ===id )
  return (
    <>
    <Navbar/>
    <div className="single-section">
        <div className="single-img-box">
           <img src={data.image} alt="" />
        </div>
        <div className="single-details">
            <h2> <span>Company name :</span>
                 {data.company} </h2>
            <h2> <span>Model: </span> {data.model} </h2>
            <h2> <span>Price</span> {data.price} $</h2>
            <h2><span>Product details</span> : {data.description} </h2>
            <button onClick={()=>navigate('/kitchen')} >Back to Menu</button>
            <button  onClick={()=>addToCart(data)} >AddTocart</button>
        </div>
       
    </div>
    </>
  );
}

export default KitchenSingle;
