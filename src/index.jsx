import Post from "@models/Post";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./bable";
import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from 'react-dom';
import WebpackLogo from "@/assets/webpackLogo.png";
// import csv from "./assets/data.csv";
// import xml from "./assets/data.xml";
// import json from "./assets/json.json";
import * as $ from "jquery";

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
      <div className="card">
        <h2>SCSS</h2>
      </div>
    </div>
  </div>


)

render(
  <App />,
  document.getElementById('root')
)

// console.log("Post to String:", post.toString());

// console.log("JSON:", json);
// console.log("XML:", xml);
// console.log("CSV:", csv);


