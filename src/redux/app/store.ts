import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import globalSlice from '../reducers/globalSlice';
import todosSlice from '../reducers/todosSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    todos: todosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;