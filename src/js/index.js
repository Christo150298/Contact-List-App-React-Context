//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./store/AppContext";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout.js";

//render your react application
ReactDOM.render(<AppContextProvider><Layout /></AppContextProvider>, document.querySelector("#app"));
