import { configureStore } from '@reduxjs/toolkit';
import addToAgendaReducer from '../features/todoSlice'

export const store = configureStore({
  reducer: {
    todos: addToAgendaReducer
  },
});
