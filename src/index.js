import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// remove marign from around body
const { style } = document.body;
style.margin = 0;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);