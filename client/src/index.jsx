import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import App from "./App.jsx";

if (module.hot) {
  module.hot.accept();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
