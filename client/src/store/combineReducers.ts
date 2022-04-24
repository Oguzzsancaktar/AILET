import { combineReducers } from 'redux'
import { AuthReducer } from '@/store'
import { authApi } from '@/services/authService'
import { userApi } from '@/services/userService'

const rootReducer = combineReducers({
  auth: AuthReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer
})

export default rootReducer
