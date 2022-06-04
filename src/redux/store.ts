import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appReducer } from "./reducer";
import { translationSaga } from "../sagas/translationSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: appReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(translationSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
