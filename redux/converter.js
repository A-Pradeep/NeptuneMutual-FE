import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NEP: 1,
  BUSD: 3,
};

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    convert_on_NEP: (state, { payload }) => {
      if (payload === "") return;
      state.NEP = (payload / 3).toFixed(2).toString();
      state.BUSD = payload;
    },
    convert_on_BUSD: (state, { payload }) => {
      if (payload === "") return;
      state.BUSD = (payload * 3).toFixed(2).toString();
      state.NEP = payload;
    },
    reset_currency: (state) => {
      state.NEP = 1;
      state.BUSD = 3;
    },
  },
});

// Action creators are generated for each case reducer function
export const { convert_on_NEP, convert_on_BUSD, reset_currency } =
  converterSlice.actions;

export default converterSlice.reducer;
