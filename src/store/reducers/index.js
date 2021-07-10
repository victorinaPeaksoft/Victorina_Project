import { quizData } from "../../data";
const local = JSON.parse(localStorage.getItem("questions"));
const initialState = {
  data: quizData,
  currentIndex: 0,
  melanholik: 0,
  sangvinnik: 0,
  fregmatik: 0,
  holerik: 0,
  // trueAns: 0,
};

const rootReducer = (state = local ? local : initialState, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      if (state.currentIndex === state.data.length - 1) {
        return state;
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        melanholik: state.melanholik + 1,
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
