import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  Divider,
  IconButton,
  Center,
  Button,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import Card from "./card";
import { ConverterIcon, CurrencyExchangeIcon } from "../../constant/icons";
import CustomModal from "./modal";
import {
  convert_on_BUSD,
  convert_on_NEP,
  reset_currency,
} from "../../redux/converter";
import InputComponent from "./input";

function Dashboard() {
  const { NEP, BUSD } = useSelector((state) => state.converter);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Button
              variat="ghost"
              bg="#1B4683"
              color="#fff"
              _hover={{ color: "#1B4683", bg: "#fff" }}
              leftIcon={<CurrencyExchangeIcon size={20} />}
              onClick={onOpen}
            >
              Check Wallet details
            </Button>
          </Center>
        </FormControl>
      </Card>
      <CustomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Dashboard;
