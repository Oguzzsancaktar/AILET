import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/store/combineReducers'
import StoreMiddlewares from '@/store/StoreMiddlewares'

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(StoreMiddlewares)
})

type IRootState = ReturnType<typeof store.getState>
type IAppDispatch = typeof store.dispatch

export default store
export type { IRootState, IAppDispatch }
