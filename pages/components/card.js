import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Container, Divider, Heading } from "@chakra-ui/layout";
import { useBreakpoint } from "@chakra-ui/media-query";

function Card({ children }) {
  return (
    <Container
      _dark={{
        bg: "gray.700",
        color: "white",
      }}
      bg={useColorModeValue("gray.100", "inherit")}
      py="12"
      px={{ base: "4", lg: "8" }}
      borderRadius="lg"
      shadow="md"
    >
      <Center>
        <Heading as="h3" size="lg">
          Currency Converter
        </Heading>
      </Center>
      <Divider orientation="horizontal" height="50px" visibility="hidden" />
      <Box>{children}</Box>
    </Container>
  );
}

export default Card;
