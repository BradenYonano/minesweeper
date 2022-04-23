import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Minesweeper from "./App"
import reportWebVitals from './reportWebVitals';

/*
var element = React.createElement("h1", {className: "greeting"}, "text");
ReactDOM.render(element, document.getElementById("root"));

var b1 = React.createElement("button", {className: "bc1"}, "Basic Button");
ReactDOM.render(b1, document.getElementById("root"));
*/

ReactDOM.render(
  <React.StrictMode>
    <Minesweeper/>
  </React.StrictMode>,
  document.getElementById("root")
);




reportWebVitals();
