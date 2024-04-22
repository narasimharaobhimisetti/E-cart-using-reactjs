import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';



const Navbar = () => {
    const{cartItems}  = useCart();
  return (
   <>
   <div className="nav-section">
    <div className="nav-title">
        <h2>E-CART</h2>
    </div>
    <div className="nav-search">
        <input type="text"  placeholder='searching...' />
    </div>
    <div className="nav-sing">
        SignUP / SingIn
    </div>
    <div className="nav-cart">
     <Link  to='/cart' >   cart :-
     <span> {cartItems.length} </span>
      </Link>
    </div>
   </div>

   <div className="nav-sub-section">
    <ul>
    <Link  to='/ac' > <li>AC</li> </Link>
    <Link  to='/book' > <li>Books</li> </Link>
    <Link  to='/computer' > <li>Computer</li> </Link>
    <Link  to='/fridge' > <li>Fridge</li> </Link>
    <Link  to='/furniture' > <li>Furniture</li> </Link>
    <Link  to='/kitchen' > <li>Kitchen</li> </Link>
    <Link  to='/men' > <li>Men'sWear</li> </Link>
    <Link  to='/mobile' > <li>Mobiles</li> </Link>
    <Link  to='/speaker' > <li>Speakers</li> </Link>
    <Link  to='/tv' > <li>TV's</li> </Link>
    <Link  to='/woman' > <li>Woman Wear</li> </Link>
    
    
    </ul>
   
   </div>
   </>
  );
}

export default Navbar;
