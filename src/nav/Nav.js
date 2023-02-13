import React from "react";
import { AiOutlineShopping } from 'react-icons/ai';
import './Nav.css';

export default function Nav({ setCartVisible }){
    return (
        <nav id="Nav">
          <h1>DDD</h1>
          <div id="cart"><AiOutlineShopping size={30} onClick={()=>setCartVisible(true)} cursor="pointer"/></div>
        </nav>
    )
};

// TODO: have badge for how many items in cart