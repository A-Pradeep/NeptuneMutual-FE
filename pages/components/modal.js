import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { ErrorIcon } from "../../constant/icons";
import CtaButton from "./ctaButton";
import WalletTable from "./walletTable";

function CustomModal({ onClose, isOpen, onLogin, onLogout }) {
  const { walletConnected, isConnecting } = useSelector(
    (state) => state.wallet
  );

  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Wallet Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {walletConnected && <WalletTable />}
          {!walletConnected && (
            <Text color="#F56565">
              <ErrorIcon size="20px" />
              Please connect to your wallet to see your wallet details.
            </Text>
          )}
        </ModalBody>
        <ModalFooter justifyContent="space-evenly">
          <CtaButton
            onClick={walletConnected ? onLogout : onLogin}
            title={walletConnected ? "Disconnect" : "Connect"}
            bg={walletConnected ? "#C53030" : "#1B4683"}
            hover_color={walletConnected ? "#C53030" : "#1B4683"}
            outline={true}
            isLoading={isConnecting}
          />
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
