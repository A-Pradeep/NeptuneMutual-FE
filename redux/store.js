import { configureStore } from "@reduxjs/toolkit";
import ConverterReducer from "./converter";

export const store = configureStore({
  reducer: {
    converter: ConverterReducer,
  },
});
