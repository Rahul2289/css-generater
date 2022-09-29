import { configureStore } from "@reduxjs/toolkit";
import ButtonReducer from "./../features/ButtonSlice";
import BackgroundReducer from "./../features/BackgroundSlice";
export const store = configureStore({
  reducer: {
    button: ButtonReducer,
    background: BackgroundReducer,
  },
});
