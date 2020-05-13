import { combineReducers } from 'redux'
import leaderboardReducer from './leaderboardReducer'
import publishedItemsReducer from './publishedItemsReducer'
import questionReducer from './questionReducer'

export default combineReducers({
  leaderboardReducer,
  publishedItemsReducer,
  questionReducer
})