import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice';
import userReducer from './userSlice';
import teacherReducer from './teacherSlice';
import parentReducer from './parentSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    teacher: teacherReducer,
    parent: parentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
