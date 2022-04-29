import { combineReducers } from 'redux'
import { UserReducer } from '@/store'

const rootReducer = combineReducers({
  user: UserReducer
})

export default rootReducer
