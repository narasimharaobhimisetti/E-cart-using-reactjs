
import React from 'react';
import { acData } from '../../data/ac';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { useCart } from '../../context/CartContext';



const AcSingle = () => {
    const navigate =useNavigate()
    const {id} = useParams()
    const data = acData.find( (item) => item.id ===id )
    const{cartItems,addToCart} = useCart()
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
            <button onClick={()=>navigate('/ac')} >Back to Menu</button>
            <button  onClick={()=>addToCart(data)} >AddTocart</button>
        </div>
       
    </div>
    </>
  );
}

export default AcSingle;
