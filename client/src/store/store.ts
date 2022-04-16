import { configureStore } from '@reduxjs/toolkit'
import reducer from './combineReducers'


const store = configureStore({
  reducer
})

type IRootState = ReturnType<typeof store.getState>
type IAppDispatch = typeof store.dispatch

export default store
export type { IRootState, IAppDispatch }
