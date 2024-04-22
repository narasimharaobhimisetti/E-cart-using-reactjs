

import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { mobileData } from '../../data/mobiles';


const MobileFull = () => {
    const[selected,setSelected] = useState([]);
    const changeHandler = (item)=>{
        if(selected.includes(item)){
            setSelected(selected.filter((item2)=> item!==item2))
        }
        else{
            setSelected([...selected,item] )
        }
    }
    
    const filterdProducts = selected.length==0 ?mobileData :
    mobileData.filter( (item)=>selected.includes(item.company) )

  return (
   <>
   <Navbar/>
   <div className="full-two">
    <div className="full-selected">
        { mobileData.map( (item)=>{
            return(
                <div>
                    <input type="checkbox" 
                    checked={selected.includes(item.company)}
                    onChange={()=>changeHandler(item.company)}
                    />
                    {item.company}
                </div>
            )
        } ) }
    </div>
   <div className="full-section">
    {
        filterdProducts.map((item)=>{
            return(
               
                
                <div  className='full-details' >
                <Link  to={`/mobile/${item.id}`} > <div className="full-image-box">
                    <img src={item.image} alt="" />
                  </div>
                  </Link> 
                  <div className="full-company">
                    {item.company}
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

export default MobileFull;