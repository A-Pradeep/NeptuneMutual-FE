import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  Divider,
  IconButton,
  Center,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import Card from "./card";
import {
  ConverterIcon,
  CurrencyExchangeIcon,
  NewTabIcon,
} from "../../constant/icons";
import CustomModal from "./modal";
import {
  convert_on_BUSD,
  convert_on_NEP,
  reset_currency,
} from "../../redux/converter";
import InputComponent from "./input";
import CtaButton from "./ctaButton";

function Dashboard({ onLogin, onLogout, loadingStatus }) {
  const dispatch = useDispatch();
  const { NEP, BUSD } = useSelector((state) => state.converter);
  const { isMetaMaskInstalled } = useSelector((state) => state.wallet);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Redirect to metamask if not installed when user clicks on install button
  const redirectToMetaMask = () => {
    window.open("https://metamask.io", "_blank");
  };

  return (
    <>
      <Card>
        <FormControl>
          <InputComponent
            label="NEP"
            currentvalue={NEP}
            onChange={(e) => dispatch(convert_on_BUSD(e.target.value))}
          />
          <Divider orientation="horizontal" height="15px" visibility="hidden" />
          <Center>
            <Tooltip label="Rest Value">
              <IconButton
                icon={<ConverterIcon size={30} />}
                variant="ghost"
                size="lg"
                onClick={() => dispatch(reset_currency())}
              />
            </Tooltip>
          </Center>
          <Divider orientation="horizontal" height="15px" visibility="hidden" />
          <InputComponent
            label="BUSD"
            currentvalue={BUSD}
            onChange={(e) => dispatch(convert_on_NEP(e.target.value))}
          />
          <Divider orientation="horizontal" height="70px" visibility="hidden" />
          <Center>
            <CtaButton
              bg={isMetaMaskInstalled ? "#1B4683" : "#f5841f"}
              hover_color={isMetaMaskInstalled ? "#1B4683" : "#f5841f"}
              leftIcon={
                isMetaMaskInstalled ? (
                  <CurrencyExchangeIcon size={20} />
                ) : (
                  <NewTabIcon size={20} />
                )
              }
              onClick={isMetaMaskInstalled ? onOpen : redirectToMetaMask}
              title={
                isMetaMaskInstalled
                  ? "Check Wallet details"
                  : "Install MetaMask"
              }
            />
          </Center>
        </FormControl>
      </Card>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        onLogin={onLogin}
        onLogout={onLogout}
        loadingStatus={loadingStatus}
      />
    </>
  );
}

export default Dashboard;
