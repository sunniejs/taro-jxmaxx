import { combineReducers } from 'redux'
import counter from './counter'
import  menu  from './menu'
import topiclist from './topic'
export default combineReducers({
  counter,menu,topiclist
})
