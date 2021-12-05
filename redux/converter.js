import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NEP: 0,
  BUSD: 0,
};

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    convert_on_NEP: (state, { payload }) => {
      if (payload === "") {
        if (state.NEP >= 0) {
          state.NEP = 0;
        } else {
          return "";
        }
      }
      state.NEP = (payload / 3).toFixed(2).toString();
      state.BUSD = payload;
    },
    convert_on_BUSD: (state, { payload }) => {
      if (payload === "") {
        if (state.BUSD >= 0) {
          state.BUSD = 0;
        } else {
          return "";
        }
      }
      state.BUSD = (payload * 3).toFixed(2).toString();
      state.NEP = payload;
    },
    reset_currency: (state) => {
      state.NEP = 0;
      state.BUSD = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { convert_on_NEP, convert_on_BUSD, reset_currency } =
  converterSlice.actions;

export default converterSlice.reducer;
