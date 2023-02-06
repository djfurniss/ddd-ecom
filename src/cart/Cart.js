import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./Cart.css";

export default function Cart(){
    const closeCart = () => {
        const cart = document.getElementById("Cart");
        cart.style.display = "none";
    }

    return (
        <div id="Cart">
            <AiFillCloseSquare size={30} color="3f3f3f" onClick={closeCart} cursor="pointer"/>
        </div>
    )
};