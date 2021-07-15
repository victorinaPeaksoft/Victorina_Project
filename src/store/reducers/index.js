import { quizData } from "../../data";
import { SET_VICTORINA } from "../actions";
const local = JSON.parse(localStorage.getItem("questions"));
const initialState = {
  currentUserAnswer: {
    sanguine: [],
    melancholic: [],
    phlegmatic: [],
    choleric: [],
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_VICTORINA:
      if (action.key === 1) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            sanguine: [...state.currentUserAnswer.sanguine, 1],
          },
        };
      } else if (action.key === 2) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            phlegmatic: [...state.currentUserAnswer.phlegmatic, 2],
          },
        };
      } else if (action.key === 3) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            melancholic: [...state.currentUserAnswer.melancholic, 3],
          },
        };
      } else if (action.key === 4) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            choleric: [...state.currentUserAnswer.choleric, 4],
          },
        };
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
