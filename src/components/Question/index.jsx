import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { setVictorina, filterVictorina } from "../../store/actions";

import { data } from "../../data";

const Question = () => {
  // let history = useHistory()
  // history.push("/question");
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const onFilter = (state) => {
    state.sort((a, b) => (a > b ? 1 : -1));
  };
  // const types = {
  //   sanguine: 1,
  //   melancholic: 2,
  //   phlegmatic: 3,
  //   choleric: 4,
  // };

  // let arr = []

  const onHandle = (key) => {
    dispatch(setVictorina(key));
    console.log(state);
  };
  return (
    <div>
      {data.map((el, id) => {
        return (
          <Card
            key={id}
            style={{
              width: 500,
              paddingTop: 15,
              backgroundColor: " rgb(150, 240, 234)",
              marginBottom: 50,
            }}
          >
            <div>{el.question}</div>
            {el.answer.map((el, id) => {
              return (
                <Button key={id} onClick={() => onHandle(el.key)}>
                  {el.option}
                </Button>
              );
            })}
          </Card>
        );
      })}
      <Button onClick={() => onFilter(state)}>Ответ</Button>
    </div>
  );
};

export default Question;
