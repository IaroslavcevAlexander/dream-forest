import { configureStore } from '@reduxjs/toolkit'
import metaReducer from './slices/meta'


export const store = configureStore({
  reducer: {
    meta: metaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch