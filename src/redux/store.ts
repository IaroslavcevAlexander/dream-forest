import { configureStore } from '@reduxjs/toolkit'
import metaReducer from './slices/meta'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiService } from './api.service'
import './api/category/api'


export const store = configureStore({
  reducer: {
    meta: metaReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch