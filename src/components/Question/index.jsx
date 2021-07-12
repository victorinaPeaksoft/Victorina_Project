import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { setVictorina,  } from "../../store/actions";
import { data } from "../../data";


const Question = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.currentUserAnswer);
  // const sanguine = useSelector((state) => state.currentUserAnswer.sanguine)
  // const sanguine = state.sanguine.length;
  // const melancholic = state.melancholic.length;
  // const phlegmatic = state.phlegmatic.length;
  // const choleric = state.choleric.length;


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

  

  const onHandle = (key) => {
    dispatch(setVictorina(key));
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
      <Link to='/result'>
      <Button onClick={onFilter}>Ответ</Button>
      </Link>
     
      {/* <h3>{state.sanguine}</h3>
      <h3>{state.melancholic}</h3>
      <h3>{state.phlegmatic}</h3>
      <h3>{state.choleric}</h3> */}
    </div>
  );
};

export default Question;
