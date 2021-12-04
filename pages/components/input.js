import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

function InputComponent({ label, currentvalue, onChange }) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        value={currentvalue}
        onChange={onChange}
        type="number"
        size="md"
        placeholder="0.00"
      />
    </>
  );
}

export default InputComponent;
