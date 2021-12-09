import {
  useColorMode,
  IconButton,
  Flex,
  Link,
  Box,
  Image,
  Center,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { MoonStarsIcon, SunIcon } from "../../constant/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex justify="space-between" px="7" py="4" alignItems="center">
        <Box display="flex" gridGap="4" justifyContent="center">
          <Image src="/neptune-mutual.svg" alt="Neptune Mututal logo" />
          <Center>
            <Link href="https://neptunemutual.com" target="_blank">
              <Heading isTruncated size="xl">
                Neptune Mutual
              </Heading>
            </Link>
          </Center>
        </Box>
        <Box display="flex" gridGap="4" alignItems="center">
          <Tooltip
            label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} mode`}
          >
            <IconButton
              aria-label="Toggle dark mode"
              icon={
                colorMode === "light" ? (
                  <MoonStarsIcon size={20} title="toggle for dark screen" />
                ) : (
                  <SunIcon size={20} title="toggle for light screen" />
                )
              }
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              mr={4}
              ml={4}
              _focus={{ border: "none" }}
              cursor="pointer"
            />
          </Tooltip>
        </Box>
      </Flex>
    </div>
  );
}

export default Navbar;
