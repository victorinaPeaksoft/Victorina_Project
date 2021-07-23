import { RU,  EN  , NEXT_QUESTION_ONE } from '../actions/index.js'
import { quizData } from '../../data'

const initialState = {
    data:quizData.en,
    currentIndex: 0,
    lang:RU
}

export const translateReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
       
        case RU:
            return {
                ...state,
                data:quizData.ru,
                lang: RU
            }
        case EN : 
        return{
            ...state,
            data: quizData.en
        }
        case NEXT_QUESTION_ONE:
      if (state.currentIndex === state.data.length - 1) {
        return state;
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
        

        default:
            return state
    }
}