import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { nextClick, prevClick } from '../../store/actions/index'
import "./Question.less"

const Question = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentIndex = state.currentIndex;
  const data = state.data;
  const [selected, setSelected] = useState("");

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(state));
  }, [state]);

  const prev = () => {
    dispatch(prevClick);
  };

  const next = (e) => {
    const current = e.target.value;
    dispatch(nextClick(current));
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="single_question">
          <h2>{data[currentIndex].question} </h2>
          <ul>
            {data[currentIndex].answers.map((item, id) => {
              return (
                <li key={id}>
                  <input
                    type="radio"
                    id={`answer_id_${item.label_id}`}
                    onClick={next}
                    value={item.variant}
                    name="radiovalues"
                  />
                  <label
                    htmlFor={`answer_id_${item.label_id}`}
                    onClick={next}
                  >
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
          <button className="btn" onClick={prev}>
            PREV
          </button>
        ) : (
          ""
        )}
        {currentIndex === data.length - 1 && (
          <Link to='/result'>
            <button>
              Submit
            </button>
          </Link>

        )}
      </div>
    </div>
  );
};

export default Question;
