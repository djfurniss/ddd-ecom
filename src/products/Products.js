import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getProds } from "../utils/api";
import "./Products.css";

export default function Products({ setCart }){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProds()
        .then(setProducts)       
    },[])

    return(
        <div id="Products">
            {/* TODO: map an array of products */}
            <div className="scrollable">
                {products.length && products.map((prod, id) => {
                    return <Product prod={prod} setCart={setCart} key={id}/>
                })}
            </div>
        </div>
    )
}