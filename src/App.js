import React, { useState } from "react";
import Nav from "./nav/Nav";
import Products from "./products/Products";
import Cart from "./cart/Cart";
import "./App.css";

export default function App() {
  // ? cart visible state??

  // testing out cart items state
  const [cart, setCart] = useState([])
  const [cartVisible, setCartVisible] =  useState(false)

  return (
    <div id="app">
      {/* nav bar */} {/* WITH cart icon that will expand out */}
      <Nav setCartVisible={setCartVisible}/>
      <div className="row content">
        {/* products */}
        <Products setCart={setCart}/>
        {/* cart.. display value toggles when cart icon is clicked or is closed*/}
        {cartVisible && <Cart cart={cart} setCart={setCart} setCartVisible={setCartVisible}/>}
      </div>
    </div>
  )
}