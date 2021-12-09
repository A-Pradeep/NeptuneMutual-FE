const chainIdMap = [
  {
    HEX: "0x0",
    Decimal: 0,
    Network: "Unknown",
  },
  {
    HEX: "0x1",
    Decimal: 1,
    Network: "Ethereum Main Network (Mainnet)",
  },
  {
    HEX: "0x3",
    Decimal: 3,
    Network: "Ropsten Test Network",
  },
  {
    HEX: "0x4",
    Decimal: 4,
    Network: "Rinkeby Test Network",
  },
  {
    HEX: "0x5",
    Decimal: 5,
    Network: "Goerli Test Network",
  },
  {
    HEX: "0x2a",
    Decimal: 42,
    Network: "Kovan Test Network",
  },
  {
    HEX: "0x61",
    Decimal: 97,
    Network: "Smart Chain - Testnet",
  },
];

export const _getProvider = () =>
  typeof web3 !== "undefined" ? window.web3.currentProvider : null;

export const _getChainIdByDecimal = (decimalValue) => {
  const chainId = chainIdMap.find((item) => item.Decimal === decimalValue);
  // Return dummy value if not found
  return chainId !== undefined ? chainId : chainIdMap[0];
};

export const _getChainIdByHex = (hexValue) => {
  const chainId = chainIdMap.find((item) => item.HEX === hexValue);
  // Return dummy value if not found
  return chainId !== undefined ? chainId : chainIdMap[0];
};

export const _getShortAccount = (account) =>
  account.slice(0, 6) + "..." + account.slice(-4);
