import React from 'react';
import { acData } from '../../data/ac';


const Ac = () => {
    const firstFive =acData.slice(0,4)
  return (
    <>
    <div className="sample-section">
        {
            firstFive.map( (item)=>{
                return(
                    <div>

                        <img src={item.image} alt="" />
                    </div>
                )
            } )
        }
    </div>
    </>
  );
}

export default Ac;
