

import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import Navbar from '../mainComponents/Navbar';
import { booksData } from '../../data/books';


const BookFull = () => {
    const[selected,setSelected] = useState([]);
    const changeHandler = (item)=>{
        if(selected.includes(item)){
            setSelected(selected.filter((item2)=> item!==item2))
        }
        else{
            setSelected([...selected,item] )
        }
    }
    
    const filterdProducts = selected.length==0 ?booksData :
    booksData.filter( (item)=>selected.includes(item.category) )

  return (
   <>
   <Navbar/>
   <div className="full-two">
    <div className="full-selected">
        { booksData.map( (item)=>{
            return(
                <div>
                    <input type="checkbox" 
                    checked={selected.includes(item.category)}
                    onChange={()=>changeHandler(item.category)}
                    />
                    {item.category}
                </div>
            )
        } ) }
    </div>
   <div className="full-section">
    {
        filterdProducts.map((item)=>{
            return(
               
                
                <div  className='full-details' >
                <Link  to={`/book/${item.id}`} > <div className="full-image-box">
                    <img src={item.image} alt="" />
                  </div>
                  </Link> 
                  <div className="full-company">
                    {item.category}
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

export default BookFull;
