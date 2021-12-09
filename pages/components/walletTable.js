import { useSelector } from "react-redux";
import { Table, Tbody, Tr, Td, TableCaption, Tooltip } from "@chakra-ui/react";
import { EthereumIcon } from "../../constant/icons";

function WalletTable() {
  const { walletConnected, data } = useSelector((state) => state.wallet);
  return (
    walletConnected && (
      <Table colorScheme="teal">
        <TableCaption>{data.chainName}</TableCaption>
        <Tbody>
          <Tr>
            <Td>Account</Td>
            <Td isNumeric maxW="20px" isTruncated>
              <Tooltip label={data.account}>{data.shortAccount}</Tooltip>
            </Td>
          </Tr>
          <Tr>
            <Td>Chain ID</Td>
            <Td isNumeric>{data.chainId}</Td>
          </Tr>
          <Tr>
            <Td>Balance</Td>
            <Td isNumeric>
              {data.balance}
              <EthereumIcon size={15} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    )
  );
}

export default WalletTable;
