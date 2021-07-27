import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { set_temperament, nextClickOne, RU, EN, prev } from "../../store/actions/index.js";
import { InputRadio } from "./InputRadio/index.jsx";
import { onCheck } from "../../store/actions/index";
import "./Question.less";

const Question = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.victorina);
  const currentIndex = useSelector((state) => state.translate.currentIndex);
  const data = useSelector((state) => state.translate.data);
  const currentChecked = state.currentUserAnswer.currentChecked;

  const [disable, setDisable] = React.useState(true);
  const onNext = () => {
    dispatch(nextClickOne(currentChecked));
    dispatch(set_temperament());
    dispatch(onCheck(""));
    setDisable(true)
  };
  const prevNext = () => {
    dispatch(prev())
  }

  return (
    <div className="container">
      <div className="content">
        <div className="single_question">
          <h2 className='second_main'>{data.questions[currentIndex].question} </h2>
          <ul>
            {data.questions[currentIndex].answers.map((item, id) => {
              return (
                <InputRadio
                  item={item}
                  key={id}
                  checked={Number(currentChecked) === item.key}
                  onChangeHandler={(e) => {
                    setDisable(false)
                    dispatch(onCheck(e.target.value));
                  }}


                />
              );
            })}
          </ul>
        </div>
        {currentIndex} / {data.questions.length - 1}
        <div className="btn_controllers">
          {currentIndex !== 0 ? (
            <Button
              className="btn1"
              onClick={prevNext}
              variant="contained"
              style={{ margin: "20px ,20px"  }}
            >
              {data.prevButton}
            </Button>
          ) : (
            ""
          )}
          {currentIndex === data.questions.length - 1 ? (
            <Link to="/result">
              <Button variant="contained" color="secondary" 
              className="submit"
              style={{marginLeft:10}}
              >
                {data.submitButton}

              </Button>
            </Link>
          ) : (
            <Button
              className="btn"
              id='btn'
              onClick={onNext}
              variant="contained"
              color="primary"
              disabled={disable}
              style={{marginLeft:10}}
            >
              {data.nextButton}
            </Button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Question;
