import { SET_VICTORINA } from "../actions";

const initialState = {
  currentUserAnswer: {
    sanguine: 0,
    melancholic: 0,
    phlegmatic: 0,
    choleric: 0,
  },
};

export const rootReducers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_VICTORINA:
      if (action.key === 1) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            sanguine: state.currentUserAnswer.sanguine + 1,
          },
        };
      } else if (action.key === 2) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            phlegmatic: state.currentUserAnswer.phlegmatic + 1,
          },
        };
      } else if (action.key === 3) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            melancholic: state.currentUserAnswer.melancholic + 1,
          },
        };
      } else if (action.key === 4) {
        return {
          ...state,
          currentUserAnswer: {
            ...state.currentUserAnswer,
            choleric: state.currentUserAnswer.choleric + 1,
          },
        };
      }

    default:
      return state;
  }
};
