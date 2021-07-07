import Post from "@models/Post";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./bable";
import React from 'react'
import { render } from 'react-dom'
import WebpackLogo from "@/assets/webpackLogo.png";
import App from './App'
const post = new Post("Webpack Post Title", WebpackLogo);



render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


