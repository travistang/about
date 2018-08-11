import info from './info'
import windowSize from './windowSize'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
  info,
  windowSize,
})
export default rootReducer
