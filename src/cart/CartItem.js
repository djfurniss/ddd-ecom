import React from "react";
import { removeItemFromCart } from "../utils/api";
import { AiOutlineMinusCircle } from "react-icons/ai"
import "./CartItem.css";

export default function CartItem({ prod, removeItemFromCart }){
    return(
        <div id="CartItem">
            <AiOutlineMinusCircle size={20} onClick={removeItemFromCart} cursor="pointer" /> {/* need to confirm removing item action */}
            <div>
                <img src={prod.imgSrc}/>
            </div>

            <div>
                <p>{prod.name}</p>
                <p>${(prod.price).toFixed(2)}</p>
            </div>
        </div>
    )
}