import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { createCart, getCart, clearCart, removeItemFromCart, trashCart } from "../utils/api";
import { AiFillCaretRight, AiOutlineDelete } from "react-icons/ai";
import "./Cart.css";

export default function Cart({ cart, setCart, setCartVisible}){
    useEffect(()=>{
        // console.log(localStorage)
        // trashCart()
        if (!localStorage.getItem('cart')) {
            console.log("no cart open, creating cart")
            createCart()
            console.log(localStorage)
        }else{
            setCart(getCart())
            console.log(localStorage)
        }
    },[])

    return (
        <div id="Cart">
            <div className="top">
                <AiFillCaretRight size={30} color="3f3f3f" onClick={()=>{setCartVisible(false)}} cursor="pointer"/>
                {cart.length ? <AiOutlineDelete size={30} onClick={()=>setCart(clearCart())} cursor="pointer" /> : null} {/* need to use a modal to confirm clearing */}
            </div>

            {/* <div id="cart-items" className="scrollable">
                {cart.length ? cart.map((item, index)=>{
                    return(
                        <CartItem prod={item} key={index} removeItemFromCart={()=>{
                            removeItemFromCart(index)
                            setCart(getCart())
                        }
                    }/>
                    )
                }): null}
            </div> */}

           {cart.length ? 
           <div id="checkout">
                <p>Checkout</p> {/* clicking this button needs to cause an animation to scroll down below the checkout button where there will be a form for payment... */}
            </div> : null}
        </div>
    )
};