import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import { RU, EN, } from "../../store/actions/index.js";
import { switch_language } from '../../store/actions'
import "./home.less";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.translate.data);

  return (
    <div className="Home">
      <div className="container">
        <div style={{ display: 'flex' }}>
          <LanguageIcon style={{ fill: 'darkBlue', marginTop: '5px' }} />
          <Button color="primary" onClick={() => dispatch(switch_language(RU))}>RU</Button>
          <Button color="secondary" onClick={() => dispatch(switch_language(EN))}>EN</Button>
        </div>
        <h1>{data.temparement}</h1>
        <Link to="question">
          <Button variant="contained" color="primary">
            {data.begin}
          </Button>
        </Link>
      </div>
    </div >
  );
};
