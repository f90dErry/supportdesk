import { configureStore } from '@reduxjs/toolkit'
import authReducers from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
    tickets: ticketReducer,
  },
})

export default store
