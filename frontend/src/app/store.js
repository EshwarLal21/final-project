import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { AuthApi } from "../features/api/authApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});
