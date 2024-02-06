import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Hello from "./Hello";
import * as ReactDOM from "react-dom";

// document.addEventListener("turbo:load", () => {
//     const root = createRoot(
//         document.body.appendChild(document.createElement("div"))
//     );
//     root.render(<Hello />);
// });

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Hello />, document.getElementById('hello'))
})
