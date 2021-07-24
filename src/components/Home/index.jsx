import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./home.less";


export const Home = () => {
  return (
    <div className="Home"> 
      <div className="container">
      
        <h1>Узнайте свой темперамент</h1>
        <Link to="question">
          <Button variant="contained" color="primary">
            Начать
          </Button>
        </Link>
      </div>
    </div>
  );
};
