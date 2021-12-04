import { useState } from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Divider,
  IconButton,
  Center,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Card from "./card";
import { ConverterIcon, CurrencyExchangeIcon } from "../../constant/icons";
import CustomModal from "./modal";

function Dashboard() {
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNEP = (e) =>
    setToCurrency(String(Number(Math.round(e * 3 + "e" + 2) + "e-" + 2)));

  const handleBUSD = (e) =>
    setFromCurrency(String(Number(Math.round(e / 3 + "e" + 2) + "e-" + 2)));

  return (
    <>
      <Card>
        <FormControl>
          <FormLabel>NEP</FormLabel>
          <NumberInput
            id="NEP"
            defaultValue={1}
            min={1}
            value={fromCurrency}
            precision={2}
            step={0.01}
            onChange={handleNEP}
          >
            <NumberInputField />
          </NumberInput>
          <Divider orientation="horizontal" height="15px" visibility="hidden" />
          <Center>
            <IconButton
              icon={<ConverterIcon size={30} />}
              variant="ghost"
              size="lg"
              cursor="unset"
            />
          </Center>
          <Divider orientation="horizontal" height="15px" visibility="hidden" />
          <FormLabel>BUSD</FormLabel>
          <NumberInput
            id="BUSD"
            min={3}
            defaultValue={3}
            value={toCurrency}
            precision={2}
            step={0.01}
            onChange={handleBUSD}
          >
            <NumberInputField />
          </NumberInput>
          <Divider orientation="horizontal" height="70px" visibility="hidden" />
          <Center>
            <Button
              loadingText="Logging in..."
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
