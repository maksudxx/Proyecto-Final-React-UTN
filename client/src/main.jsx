import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import {Provider} from "react-redux"
import "./index.css";
// import store from './redux/store/index'

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

);
