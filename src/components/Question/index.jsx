import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { change_language } from "../../store/actions";
import { set_temperament, nextClickOne } from "../../store/actions/index.js";
import { InputRadio } from "./InputRadio/index.jsx";
import { onCheck } from "../../store/actions/index";
import {RU,EN } from '../../store/actions'

import "./Question.less";

const Question = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.victorina);
  const currentIndex = useSelector((state) => state.translate.currentIndex);
  const data = useSelector((state) => state.translate.data)
  // const data = state.data;
  const currentChecked = state.currentUserAnswer.currentChecked;

  // const translate = useSelector((state) => state.translate);

  

  const onNext = () => {
    dispatch(nextClickOne(currentChecked));
    dispatch(set_temperament());
    dispatch(onCheck(""));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="single_question">
          <Button onClick={() => dispatch(change_language(RU))}>RU</Button>
          <Button onClick={() => dispatch(change_language(EN))}>EN</Button>
          
          <h2 className="second_main">{data[currentIndex].question} </h2>

          <ul>
            {data[currentIndex].answers.map((item, id) => {
              return (
                <InputRadio
                  item={item}
                  key={id}
                  checked={Number(currentChecked) === item.key}
                  onChangeHandler={(e) => {
                    dispatch(onCheck(e.target.value));
                  }}
                />
              );
            })}
          </ul>
        </div>
        <h3>
          {currentIndex}/{data.length - 1}
        </h3>
      </div>
      <div className="btn_controllers">
        {currentIndex >= 0 ? (
          <Button
            className="btn"
            onClick={onNext}
            variant="contained"
            color="primary"
          >
            NEXT
          </Button>
        ) : (
          ""
        )}
        {currentIndex === data.length - 1 && (
          <Link to="/result">
            <Button variant="contained" color="secondary" className="submit">
              Submit
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Question;
