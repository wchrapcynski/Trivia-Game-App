import { combineReducers } from 'redux'
import leaderboardReducer from './leaderboardReducer'
import questionReducer from './questionReducer'

export default combineReducers({
  leaderboardReducer,
  questionReducer
})