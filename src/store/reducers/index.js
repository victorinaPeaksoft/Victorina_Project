import { quizData } from "../../data";

const initialState = {
  data: quizData,
  currentIndex: 0,
  currentUserAnswer: {
    checked: false,
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
            checked:true,
          },
        };
      } else if (action.current === 2) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            sanguine: [...state.currentUserAnswer.sanguine, 2],
            checked:true,
          },
        };
      } else if (action.current === 3) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            phlegmatic: [...state.currentUserAnswer.phlegmatic, 3],
            checked:true,
          },
        };
      } else if (action.current === 4) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            choleric: [...state.currentUserAnswer.choleric, 4],
            checked:true,
          },
        };
      }

    case "NEXT_QUESTION_ONE":
      if (state.currentIndex === state.data.length - 1) {
        return {
          ...state.currentIndex,
          currentIndex: state.currentIndex + 1,
        };
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };

    default:
      return state;
  }
};

export default rootReducer;
