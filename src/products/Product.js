import React from "react";
import { addItemToCart } from "../utils/api";
import { BsCartPlus } from "react-icons/bs";
import "./Product.css";

export default function Product({ prod, setCart }){
    return(
        <div id="Product">
            <div>
                <img src={prod.imgSrc}/>
            </div>
            <div className="row between">
                <div>
                    <h3>{prod.name}</h3>
                    <p>${(prod.price).toFixed(2)}</p>
                </div>
                <div id="atc">
                    {/* add to cart icon */}
                    <BsCartPlus size={25} color="3f3f3f" cursor="pointer" onClick={()=>setCart(addItemToCart(prod))}/>
                </div>
            </div>
        </div>
    )
}