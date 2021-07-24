import { SET_TEMPERAMENT, ON_CHECK, REFRESH_RESULT } from "../actions";

const initialState = {
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
    case ON_CHECK:
      return {
        ...state,
        currentUserAnswer: {
          ...state.currentUserAnswer,
          currentChecked: action.payload,
        },
      };
    case REFRESH_RESULT:
      return {
        ...state,
        currentUserAnswer: {
          choleric: [],
          phlegmatic: [],
          sanguine: [],
          melancholic: [],
        },
      };
    default:
      return state;
  }
};
