import { combineReducers } from 'redux'
import { getPostsReducer } from './PostReducer'

const rootReducer = combineReducers({
  posts: getPostsReducer,
})

export default rootReducer
