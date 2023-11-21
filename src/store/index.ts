import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from 'store/slices/articlesSlice.ts';

export const store = configureStore({
  devTools: true,
  reducer: {
    articles: articlesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
