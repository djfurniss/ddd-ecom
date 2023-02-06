import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.css';

export default function Nav(){
    const openCart = () => {
        const cartDiv = document.getElementById("Cart");
        cartDiv.style.display = "block";
    }

    return (
        <nav id="Nav">
          <h1>DDD</h1>
          <div id="cart"><AiOutlineShoppingCart size={30} onClick={openCart} cursor="pointer"/></div>
        </nav>
    )
};