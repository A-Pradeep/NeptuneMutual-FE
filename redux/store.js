import { configureStore } from "@reduxjs/toolkit";
import ConverterReducer from "./converter";
import WalletReducer from "./wallet";

export const store = configureStore({
  reducer: {
    converter: ConverterReducer,
    wallet: WalletReducer,
  },
});
