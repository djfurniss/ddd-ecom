import React from "react";
import Nav from "./nav/Nav";
import Produts from "./products/Products";
import Cart from "./cart/Cart";

export default function App() {

  return (
    <div>
      {/* nav bar */} {/* WITH cart icon that will expand out */}
      <Nav/>
      {/* products */}
      {/* <Produts/> */}
      {/* cart.. display value toggles when cart icon is clicked or is closed*/}
      {/* <Cart/> */}
    </div>
  )
}