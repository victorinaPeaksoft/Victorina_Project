import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { nextClick, prevClick } from '../../store/actions/index'
import "./Question.less"

const Question = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentIndex = state.currentIndex;
  const data = state.data;



  const prev = () => {
    dispatch(prevClick);
  };

  const next = (e) => {
    const current = e.target.value;
    dispatch(nextClick(Number(current)));
    // console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="single_question">
          <h2>{data[currentIndex].question} </h2>
          <ul>
            {data[currentIndex].answers.map((item, id,) => {
              return (
                <li key={id}>
                  <label
                    onClick={next}
                    id={`${item.key}`}
                    value={item.key}
                  >
                    <input
                      type="radio"
                      id={`${item.key}`}
                      value={item.key}
                      name="radiovalues"
                    />
                    {item.variant}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <h3>
          {currentIndex}/{data.length - 1}
        </h3>
      </div>
      <div className="btn_controllers">
        {currentIndex > 0 ? (
          <Button className="btn" onClick={prev} variant="contained" color="primary">
            PREV
          </Button>
        ) : (
          ""
        )}
        {currentIndex === data.length - 1 && (
          <Link to='/result'>
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </Link>

        )}
      </div>
    </div>
  );
};

export default Question;
