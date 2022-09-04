import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movielist";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<MovieList />, document.getElementById("root"));

reportWebVitals();
