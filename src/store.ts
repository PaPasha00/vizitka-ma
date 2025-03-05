import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getDate } from './services/dates'

export const store = configureStore({
  reducer: {
    [getDate.reducerPath]: getDate.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getDate.middleware),
})

setupListeners(store.dispatch)