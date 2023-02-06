import React from "react";
import { BsCartPlus } from "react-icons/bs"
import "./Product.css";

export default function Product(){
    // TODO: props = img_src, name, price
    return(
        <div id="Product">
            <div>
                <img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"/>
            </div>
            <div className="row between">
                <div>
                    <h3>Name</h3>
                    <p>Price</p>
                </div>
                <div id="atc">
                    {/* add to cart icon */}
                    <BsCartPlus size={25} color="3f3f3f"/>
                </div>
            </div>
        </div>
    )
}