import { quizData } from "../../data";
<<<<<<< HEAD
// import { SET_VICTORINA } from "../actions/index";
// const local = JSON.parse(localStorage.getItem("questions"));

const initialState = {
  data: quizData,
  currentIndex: 0,
  currentUserAnswer: {
    melancholic: [],
    sanguine: [],
    phlegmatic: [],
    choleric: [],
  },
=======
import { SET_VICTORINA } from "../actions";
const local = JSON.parse(localStorage.getItem("questions"));
const initialState = {
  currentUserAnswer: {
    sanguine:[],
    melancholic: [],
    phlegmatic: [],
    choleric: [],
  },
 
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
<<<<<<< HEAD
    case "NEXT_QUESTION":
      if (action.current === 1) {
=======
    case SET_VICTORINA:
      if (action.key === 1) {
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
<<<<<<< HEAD
            melancholic: [...state.currentUserAnswer.melancholic, 1],
          },
        };
      } else if (action.current === 2) {
=======
            sanguine:  [...state.currentUserAnswer.sanguine, 1],
          },
        };
      } else if (action.key === 2) {
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
<<<<<<< HEAD
            sanguine: [...state.currentUserAnswer.sanguine, 2],
          },
        };
      } else if (action.current === 3) {
=======
            phlegmatic:  [...state.currentUserAnswer.phlegmatic, 2],
          },
        };
      } else if (action.key === 3) {
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
<<<<<<< HEAD
            phlegmatic: [...state.currentUserAnswer.phlegmatic, 3],
          },
        };
      } else if (action.current === 4) {
=======
            melancholic: [...state.currentUserAnswer.melancholic, 3],
          },
        };
      } else if (action.key === 4) {
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
<<<<<<< HEAD
            choleric: [...state.currentUserAnswer.choleric, 4],
          },
        };
      } else if (state.currentIndex === state.data.length - 1) {
        return state;
=======
            choleric:  [...state.currentUserAnswer.choleric, 4],
          },
        };
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case "PREV_QUESTION":
      if (state.currentIndex === 0) {
        return state;
      }
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };

    default:
      return state;
  }
};

export default rootReducer;
