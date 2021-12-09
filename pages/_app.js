import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import WalletProvider from "./walletProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
