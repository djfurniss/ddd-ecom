import React from "react";
import Product from "./Product";
import "./Products.css";

export default function Products(){
    return(
        <div id="Products">
            {/* TODO: map an array of products */}
            <div className="scrollable">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}