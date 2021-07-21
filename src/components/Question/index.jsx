import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { nextClick, nextClickOne } from "../../store/actions/index";
import { InputRadio } from "./InputRadio/index.jsx";
import "./Question.less";

const Question = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currentIndex = state.currentIndex;
  const data = state.data;
  const ischec = state.currentUserAnswer.checked;
  // ischec take from state.currentUserAnswer (chacked = false)
  // currentUserAnswer - this is object


  const next1 = () => {
    dispatch(nextClickOne);

  };

  const next = (key) => {
    dispatch(nextClick(key));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="single_question">
          <h2>{data[currentIndex].question} </h2>
          <ul>
            {data[currentIndex].answers.map((item, id) => {
              return (
                <InputRadio id={id} item={item} key={id} isChecked={ischec}  next={ () => next(item.key)}/>
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
            onClick={next1}
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
