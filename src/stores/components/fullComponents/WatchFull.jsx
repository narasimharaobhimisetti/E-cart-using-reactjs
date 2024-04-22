

import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { watchData } from '../../data/watch';

const WatchFull = () => {
    const[selected,setSelected] = useState([]);
    const changeHandler = (item)=>{
        if(selected.includes(item)){
            setSelected(selected.filter((item2)=> item!==item2))
        }
        else{
            setSelected([...selected,item] )
        }
    }
    
    const filterdProducts = selected.length==0 ?watchData :
    watchData.filter( (item)=>selected.includes(item.company) )

  return (
   <>
   <Navbar/>
   <div className="full-two">
    <div className="full-selected">
        { watchData.map( (item)=>{
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
                <Link  to={`/watch/${item.id}`} > <div className="full-image-box">
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

export default WatchFull;
