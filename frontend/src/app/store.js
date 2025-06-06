import { configureStore } from '@reduxjs/toolkit'
import authReducers from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
    tickets: ticketReducer,
    notes: noteReducer,
  },
})

export default store
