import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IState {
  token: string
  address: string
  loginStatus: string
}

const initialState: IState = {
  token: '',
  address: '',
  loginStatus: '',
}
// eslint-disable-next-line no-empty-pattern
export const appInit = createAsyncThunk('fetchLogin', async ({}: any, {}) => {
  console.log('aaa')
})

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    changeTokenAction: (state, { payload }) => {
      state.token = payload
    },
    changeAddressAction: (state, { payload }) => {
      state.address = payload
    },
    changeLoginStatusAction: (state, { payload }) => {
      state.loginStatus = payload
    },
  },
})

export const { changeTokenAction, changeAddressAction, changeLoginStatusAction } = rootSlice.actions
export default rootSlice.reducer
