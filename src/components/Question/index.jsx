import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { setVictorina,nextVictorina,prevVictorina } from "../../store/actions";
import { data } from "../../data";

const Question = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.currentUserAnswer);
 
  // const sanguine = state.sanguine.length;
  // const melancholic = state.melancholic.length;
  // const phlegmatic = state.phlegmatic.length;
  // const choleric = state.choleric.length;
  const currentIndex = useSelector((state) => state.currentIndex)
  const dataState = useSelector((state) => state.data)

 
  const prev = () => {
    dispatch(prevVictorina);
  };

  const next = (e) => {
    const current = e.target.value;
    dispatch(nextVictorina(current));
    console.log(state)
    // dispatch(nextVictorina(key));
    // console.log(state)
   
  };

  const onHandle = (key) => {
    dispatch(setVictorina(key));
      console.log(state)
  
  
  };
  return (
    
    <div>
      <h2>{dataState[currentIndex].question}</h2>
     <ul>
       {dataState[currentIndex].answer.map((el,id) =>{
         return (
            
           <li key={id}>
             <input 
             type="radio"
             id={`${el.key}`}
             onClick={() => onHandle(el.key),next}
             value={el.option}
             name="radiovalues"
             />
             <label
              htmlFor={`key${el.key}`}
              onClick={() => onHandle(el.key),next}
             >
               {el.option}
             </label>
           </li>
         )
       })}
     </ul>
     {/* <Button onClick={next}>Next</Button> */}
     <h3>
          {currentIndex + 1 }/{data.length - 2}
        </h3>
        <div>
        {currentIndex > 1 ? (
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
      {/* {data.map((el, id) => {
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
      })} */}
      {/* <Link to="/result">
        <Button >Ответ</Button>
      </Link> */}

    
    </div>
  );
};

export default Question;
