import { IUser } from '@/models'
import { createSlice } from '@reduxjs/toolkit'
import { IRootState } from '../store'
import * as Keychain from 'react-native-keychain'

type IUserState = {
  userId: string
  accessToken: string
  user?: IUser | undefined
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: Keychain.('userId') || '',
    accessToken: AsyncStorage.getItem('accessToken') || '',
    user: undefined
  } as IUserState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.id
      state.accessToken = action.payload.accessToken
      state.user = action.payload.user
    },
    logout(state) {
      state.userId = ''
      state.accessToken = ''
      state.user = undefined
    }
  }
})

export const { setUser, logout } = userSlice.actions

export const selectUser = (state: IRootState) => state.user.user
export const selectUserId = (state: IRootState) => state.user.userId
export const selectAccessToken = (state: IRootState) => state.user.accessToken

export default userSlice.reducer
