import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// remove marign from around body
const { style } = document.body;
style.margin = 0;

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById("root")
);