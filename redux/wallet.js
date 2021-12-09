import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnecting: false,
  isMetaMaskInstalled: false,
  walletConnected: false,
  data: {
    account: null,
    balance: null,
    chainId: null,
    chainName: null,
    shortAccount: null,
  },
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    //  Check if MetaMask is installed
    preCheck: (state, { payload }) => {
      state.isMetaMaskInstalled = payload;
    },
    updateLoading: (state, { payload }) => {
      state.isConnecting = payload;
    },
    updateWalletDetails: (state, { payload }) => {
      state.data = {
        account: payload.account,
        balance: payload.balance,
        chainId: payload.chainId,
        chainName: payload.chainName,
        shortAccount: payload.shortAccount,
      };
      state.walletConnected = true;
      state.isConnecting = false;
    },
    disconnectWallet: (state) => {
      state.isConnecting = false;
      state.walletConnected = false;
      state.data.account = null;
      state.data.balance = null;
      state.data.chainId = null;
      state.data.chainName = null;
      state.data.shortAccount = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  preCheck,
  updateLoading,
  updateWalletDetails,
  disconnectWallet,
} = walletSlice.actions;

export default walletSlice.reducer;
