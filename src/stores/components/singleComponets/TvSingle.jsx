

import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { tvData } from '../../data/tv';
import { useCart } from '../../context/CartContext';



const TvSingle = () => {
  const{cartItems,addToCart} =useCart()
    const navigate =useNavigate()
    const {id} = useParams()
    const data = tvData.find( (item) => item.id ===id )
  return (
    <>
    <Navbar/>
    <div className="single-section">
        <div className="single-img-box"   >
           <img src={data.image} alt="image"  />
        </div>
        <div className="single-details">
            <h2> <span>brand name :</span>
                 {data.brand} </h2>
            <h2> <span>Model: </span> {data.model} </h2>
            <h2> <span>Price</span> {data.price} $</h2>
            <h2><span>Product details</span> : {data.description} </h2>
            <button onClick={()=>navigate('/tv')} >Back to Menu</button>
            <button  onClick={()=>addToCart(data)} >AddTocart</button>
        </div>
       
    </div>
    </>
  );
}

export default TvSingle;
