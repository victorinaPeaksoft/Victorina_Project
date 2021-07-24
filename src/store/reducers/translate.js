import { data } from "../../data";
import { RU, EN, REFRESH } from "../actions";
import { NEXT_QUESTION_ONE, PREV_QUESTION_ONE } from "../actions";

export const initialState = {
  currentIndex: 0,
  data: data.ru,
  lang: RU,
};

export const translateReducer = (state = initialState, action) => {
  switch (action.type) {
    case RU:
      return {
        ...state,
        data: data.ru,
        lang: RU,
      };
    case EN:
      return {
        ...state,
        data: data.en,
        lang: EN,
      };
    case NEXT_QUESTION_ONE:
      if (state.currentIndex === state.data.length - 1) {
        return state;
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case PREV_QUESTION_ONE:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case REFRESH:
      return {
        ...state,
        currentIndex: 0,
      };

    default:
      return state;
  }
};
