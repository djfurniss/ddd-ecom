import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Nav.css'

export default function Nav(){
    return (
        <nav id="Nav">
          <h1>DDD</h1>
          <div id="cart"><AiOutlineShoppingCart size={30}/></div>
        </nav>
    )
}