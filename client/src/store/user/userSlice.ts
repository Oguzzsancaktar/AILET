import { IUser } from "@/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IUserState {
  user: IUser | null
  token: string
}

const initialState: IUserState = {
  user: null,
  token: ""
}

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    }
  }
})


export const { setUser, setToken } = userSlice.actions
export default userSlice.reducer