import React from "react";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { nextClick, prevClick } from '../../store/actions/index'
import "./Question.less"
=======
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { setVictorina,  } from "../../store/actions";
import { data } from "../../data";

>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633

const Question = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const currentIndex = state.currentIndex;
  const data = state.data;


=======
  const state = useSelector((state) => state.currentUserAnswer);
  // const sanguine = useSelector((state) => state.currentUserAnswer.sanguine)
  const sanguine = state.sanguine.length;
  const melancholic = state.melancholic.length;
  const phlegmatic = state.phlegmatic.length;
  const choleric = state.choleric.length;

>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633

  const onFilter = () => {
    console.log(state )
    // if(sanguine.length > 10){
    //   return 'sanguine'
    // }else if(melancholic.length > 10){
    //   return 'melancholic'
    // }else if(phlegmatic.length > 10){
    //   return 'phlegmatic'
    // }else if(choleric.length > 10){
    //   return 'choleric'
    // }
    
    
  };
  // const types = {
  //   sanguine: 1,
  //   melancholic: 2,
  //   phlegmatic: 3,
  //   choleric: 4,
  // };

<<<<<<< HEAD
  const next = (e) => {
    const current = e.target.value;
    dispatch(nextClick(Number(current)));
    console.log(e.target.value);
  };
=======
  
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633

  const onHandle = (key) => {
    dispatch(setVictorina(key));
  };
  return (
<<<<<<< HEAD
    <Container fixed>
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
    </Container>

=======
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
      <Link to='/result'>
      <Button onClick={onFilter}>Ответ</Button>
      </Link>
     
      {/* <h3>{state.sanguine}</h3>
      <h3>{state.melancholic}</h3>
      <h3>{state.phlegmatic}</h3>
      <h3>{state.choleric}</h3> */}
    </div>
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
  );
};

export default Question;
