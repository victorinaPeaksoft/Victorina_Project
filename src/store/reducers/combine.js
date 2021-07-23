import { combineReducers } from 'redux'
import rootReducer from '../reducers/index.js'
import {Translate} from '../reducers/translate.js'

export default combineReducers({
    rootReducer,
    Translate
})