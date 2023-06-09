import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";

const store = configureStore({
  reducer: {
    auth: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
