import { configureStore } from "@reduxjs/toolkit";
import { jokesSlice } from "./jokesSlice";

export const store = configureStore({
  reducer: jokesSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;