import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor:'red',
  borderRadius : 0,
  width:100,
  height:100,
  marginLeft:0,
  marginTop:0,

}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    incrementHeight: (state) => {
      state.height += 10
    },
    incrementWidth: (state) => {
      state.width += 10
    },
    incrementMarginLeft: (state) => {
      state.marginLeft -= 10
    },
    incrementMarginRight: (state) => {
      state.marginLeft += 10
    },
    incrementMarginTop: (state) => {
      state.marginTop -= 10
    },
    incrementMarginDown: (state) => {
      state.marginTop += 10
    },
    changeToCircle: (state) => {
      state.borderRadius = '50%'
    },
    changeColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
})

export const { incrementHeight, incrementWidth, changeColor,incrementMarginLeft ,incrementMarginRight,incrementMarginDown,incrementMarginTop,changeToCircle} = boxSlice.actions

export default boxSlice.reducer