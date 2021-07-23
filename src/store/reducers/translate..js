import {CHANGE_LANGUAGE} from  '../../store/actions'
import { quizData } from '../../data'

const initialState = {
    data:quizData
}

export const Translate = (state = initialState, action) => {
    switch(action.type){
        case RU:
            return {
                ...state,
                data:quizData.ru
            }
        case EN : 
        return{
            ...state,
            data: quizData.en
        }
    }
}