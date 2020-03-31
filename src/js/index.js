//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
