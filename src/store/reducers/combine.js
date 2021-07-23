import { combineReducers } from 'redux'
import {victorinaReducer} from '../reducers/index.js'
import {translateReducer} from '../reducers/translate.js'

export default combineReducers({
   victorina: victorinaReducer,
   translate: translateReducer
})