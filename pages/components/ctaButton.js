import { Button } from "@chakra-ui/button";
function CtaButton({
  bg,
  hover_color,
  leftIcon,
  onClick,
  title,
  outline = false,
  isLoading = false,
  loadingText = "Connecting...",
}) {
  return (
    <Button
      loadingText={loadingText}
      isLoading={isLoading}
      variant="ghost"
      bg={bg}
      color="#fff"
      _hover={{
        color: hover_color,
        bg: "#fff",
        border: outline ? "1px solid" + hover_color : "none",
      }}
      leftIcon={leftIcon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default CtaButton;
