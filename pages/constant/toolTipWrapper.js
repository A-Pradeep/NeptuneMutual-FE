import { Tooltip } from "@chakra-ui/react";

function ToolTipWrapper({ children, label }) {
  return (
    <Tooltip label={label} aria-label={`A tooltip for ${label}`}>
      {children}
    </Tooltip>
  );
}

export default ToolTipWrapper;
