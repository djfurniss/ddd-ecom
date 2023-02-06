import React from "react";
import "./Product.css"

export default function Product(){
    // TODO: props = img_src, name, price
    return(
        <div id="Product">
            <div>
                <img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"/>
            </div>
            <h3>Name</h3>
            <p>Price</p>
        </div>
    )
}