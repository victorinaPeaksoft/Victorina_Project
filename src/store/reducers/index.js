import { quizData } from "../../data";

const initialState = {
  data: quizData,
  currentIndex: 0,
  currentUserAnswer: {
    melancholic: [],
    sanguine: [],
    phlegmatic: [],
    choleric: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      if (action.current === 1) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            melancholic: [...state.currentUserAnswer.melancholic, 1],
          },
        };
      } else if (action.current === 2) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            sanguine: [...state.currentUserAnswer.sanguine, 2],
          },
        };
      } else if (action.current === 3) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            phlegmatic: [...state.currentUserAnswer.phlegmatic, 3],
          },
        };
      } else if (action.current === 4) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            choleric: [...state.currentUserAnswer.choleric, 4],
          },
        };
      } else if (state.currentIndex === state.data.length - 1) {
        return state;
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
