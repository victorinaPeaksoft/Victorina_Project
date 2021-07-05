import Post from "@models/Post";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./bable";
import React from 'react'
import { render } from 'react-dom'
import WebpackLogo from "@/assets/webpackLogo.png";
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
    <h1><i>Baktyiar </i></h1>
  </div>


)

render(
  <App />,
  document.getElementById('root')
)


