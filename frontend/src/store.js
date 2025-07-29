import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  productStore: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
