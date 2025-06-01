import { configureStore } from '@reduxjs/toolkit'
import boxSlice from './reducerSlices/boxSlice';

const store = configureStore({
  reducer: {
    box: boxSlice,
  },
})

export default store; 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
