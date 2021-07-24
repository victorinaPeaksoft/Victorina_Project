// import { data } from "../../data";
import { SET_TEMPERAMENT, NEXT_QUESTION_ONE, ON_CHECK } from "../actions";

const initialState = {
  // data: data,
  // currentIndex: 0,
  currentUserAnswer: {
    currentChecked: null,
    melancholic: [],
    sanguine: [],
    phlegmatic: [],
    choleric: [],
  },
};

export const victorinaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPERAMENT:
      if (state.currentUserAnswer.currentChecked === 1) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            melancholic: [...state.currentUserAnswer.melancholic, 1],
          },
        };
      } else if (state.currentUserAnswer.currentChecked === 2) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            sanguine: [...state.currentUserAnswer.sanguine, 2],
          },
        };
      } else if (state.currentUserAnswer.currentChecked === 3) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            phlegmatic: [...state.currentUserAnswer.phlegmatic, 3],
          },
        };
      } else if (state.currentUserAnswer.currentChecked === 4) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            choleric: [...state.currentUserAnswer.choleric, 4],
          },
        };
      }

    // case NEXT_QUESTION_ONE:
    //   if (state.currentIndex === state.data.length - 1) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     currentIndex: state.currentIndex + 1,
    //   };

    case ON_CHECK:
      return {
        ...state,
        currentUserAnswer: {
          ...state.currentUserAnswer,
          currentChecked: action.payload,
        },
      };
    default:
      return state;
  }
};
