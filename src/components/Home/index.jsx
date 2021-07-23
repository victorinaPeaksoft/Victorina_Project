import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./home.less";
import LanguageIcon from '@material-ui/icons/Language';

export const Home = () => {
  return (
    <div className="Home"> 
      <div className="container">
      <div style={{display: 'flex'}}>
        <LanguageIcon style={{fill: 'darkBlue',marginTop: '5px'}} />
        <Button color="primary">RU</Button>
        <Button color="secondary">KG</Button>
        <Button>EN</Button>
      </div>
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
