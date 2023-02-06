import React from "react";
import Nav from "./nav/Nav";
import Products from "./products/Products";
import Cart from "./cart/Cart";
import "./App.css";

export default function App() {
  // ? cart visible state??

  return (
    <div>
      {/* nav bar */} {/* WITH cart icon that will expand out */}
      <Nav/>
      <div className="row content">
        {/* products */}
        <Products/>
        {/* cart.. display value toggles when cart icon is clicked or is closed*/}
        <Cart/>
      </div>
    </div>
  )
}