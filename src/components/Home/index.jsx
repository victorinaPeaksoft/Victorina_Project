import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./home.less";

export const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <p>Тест на Личность и характер</p>
        <h1>Узнавайте свой темпаремент</h1>
        <Link to="question">
          <Button variant="contained" color="primary">
            Начать
          </Button>
        </Link>
      </div>
    </div>
  );
};
