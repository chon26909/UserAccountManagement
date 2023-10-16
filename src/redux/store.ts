import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// slices
import users from "./slices/userSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelection: TypedUseSelectorHook<RootState> = useSelector;
