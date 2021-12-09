import React, { useEffect } from "react";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import {
  disconnectWallet,
  preCheck,
  updateLoading,
  updateWalletDetails,
} from "../redux/wallet";
import {
  _getChainIdByDecimal,
  _getChainIdByHex,
  _getProvider,
  _getShortAccount,
  _provider,
} from "../constant/connector";
import { useToast } from "@chakra-ui/react";

function WalletProvider(props) {
  const { data } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const { children } = props;
  const _provider = _getProvider();
  const web3 = new Web3(_provider);
  const toast = useToast();

  // Precheck if metaMask is installed and dispatches the action
  useEffect(() => {
    dispatch(preCheck(typeof window.web3 !== "undefined" ? true : false));
  }, []);

  if (typeof web3 !== "undefined" && typeof ethereum !== "undefined") {
    ethereum.on("accountsChanged", async (changed_account) => {
      if (changed_account.length > 0) {
        if (changed_account[0] !== data.account && data.account !== null) {
          handleAccountChange(changed_account[0]);
        }
      } else {
        dispatch(disconnectWallet());
      }
    });

    ethereum.on("chainChanged", function (changed_chainId) {
      handleNetworkChange(changed_chainId);
    });
  }

  const showToast = ({ title, description, status }) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAccountChange = async (newAccount) => {
    const chainId = await web3.eth.getChainId();
    const { Network } = _getChainIdByDecimal(chainId);
    const rawBalance = await web3.eth.getBalance(newAccount);
    const balance = web3.utils.fromWei(rawBalance, "ether");
    const shortAccount = _getShortAccount(newAccount);

    dispatch(
      updateWalletDetails({
        account: newAccount,
        chainId,
        balance,
        chainName: Network,
        shortAccount,
      })
    );
  };

  const handleNetworkChange = async (newChainId) => {
    const account = await web3.eth.getAccounts();
    const rawBalance = await web3.eth.getBalance(account[0]);
    const { Decimal, Network } = _getChainIdByHex(newChainId);
    const balance = web3.utils.fromWei(rawBalance, "ether");

    dispatch(
      updateWalletDetails({
        account: account[0],
        chainId: Decimal,
        balance,
        chainName: Network,
        shortAccount: _getShortAccount(account[0]),
      })
    );
  };

  const handleLogin = async () => {
    dispatch(updateLoading(true));
    try {
      await _provider.request({ method: "eth_requestAccounts" });
    } catch ({ code, message }) {
      dispatch(updateLoading(false));
      showToast({
        title: `Error - ${code}`,
        description: message,
        status: "error",
      });
      return;
    }

    const account = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    const { Network } = _getChainIdByDecimal(chainId);
    const rawBalance = await web3.eth.getBalance(account[0]);
    const balance = web3.utils.fromWei(rawBalance, "ether");
    const shortAccount = _getShortAccount(account[0]);

    dispatch(
      updateWalletDetails({
        account: account[0],
        chainId: chainId,
        balance: balance,
        shortAccount: shortAccount,
        chainName: Network,
      })
    );

    // Show toast once the wallet is connected
    showToast({
      title: "Connected",
      description: `You are connected to '${Network}'`,
      status: "success",
    });
  };

  const handleLogout = async () => {
    dispatch(disconnectWallet());
    showToast({
      title: "Disconnected",
      description: "You are disconnected from the wallet",
      status: "success",
    });
  };

  // Custom props for the children component
  const childrenWithExtraProp = React.Children.map(children, (child) =>
    React.cloneElement(child, { onLogin: handleLogin, onLogout: handleLogout })
  );
  return <>{childrenWithExtraProp}</>;
}

export default WalletProvider;
