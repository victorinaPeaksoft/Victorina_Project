import React from "react";
import { render } from "react-dom";
import Layout from "./components/Layout/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import  { useSelector } from 'react-redux';
import Container from "@material-ui/core/Container";
import rootReducer from "./store/reducers/combine.js";
// import rootReducers from "./store/reducers/index.js";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const state = useSelector((state) => state);

 

  return (
    <div className="app">
      <Container fixed>
        <h1 class="animate__animated animate__bounce">Викторина</h1>
        <Layout />
      </Container>
    </div>
  );
};

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
