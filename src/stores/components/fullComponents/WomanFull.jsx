

import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { womanData } from '../../data/woman';


const WomanFull = () => {
    const[selected,setSelected] = useState([]);
    const changeHandler = (item)=>{
        if(selected.includes(item)){
            setSelected(selected.filter((item2)=> item!==item2))
        }
        else{
            setSelected([...selected,item] )
        }
    }
    
    const filterdProducts = selected.length==0 ?womanData :
    womanData.filter( (item)=>selected.includes(item.brand) )

  return (
   <>
   <Navbar/>
   <div className="full-two">
    <div className="full-selected">
        { womanData.map( (item)=>{
            return(
                <div>
                    <input type="checkbox" 
                    checked={selected.includes(item.brand)}
                    onChange={()=>changeHandler(item.brand)}
                    />
                    {item.brand}
                </div>
            )
        } ) }
    </div>
   <div className="full-section">
    {
        filterdProducts.map((item)=>{
            return(
               
                
                <div  className='full-details' >
                <Link  to={`/woman/${item.id}`} > <div className="full-image-box">
                    <img src={item.image} alt="" />
                  </div>
                  </Link> 
                  <div className="full-brand">
                    {item.brand}
                  </div>
                   <div className="full-price">
                    {item.price}
                   </div>
                </div>
                
            )
        })
    }
   </div>
   </div>
   </>
  );
}

export default WomanFull;
