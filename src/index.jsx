import Post from "@models/Post";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./bable";
import React from "react";
import { render } from "react-dom";
import WebpackLogo from "@/assets/webpackLogo.png";
import Layout from "./components/Layout/index.jsx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from "redux";
import { rootReducers } from "./store/reducers";


const store = createStore(rootReducers)

const post = new Post("Webpack Post Title", WebpackLogo);

const App = () => (
  <BrowserRouter>
   <Provider store={store}>
    <div className="container">
      <h1>Victorina</h1>
      <Layout />
    </div>
    </Provider>
  </BrowserRouter>
);

render(
  <React.StrictMode>
   
      <App />
   
  </React.StrictMode>,
  document.getElementById("root")
);
