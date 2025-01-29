import { StyledButton } from "./Reset.styles";
import { FormInputs } from "../Main/Main";
import { useFormContext } from "react-hook-form";

export default function Reset() {
  const form = useFormContext<FormInputs>();
  const { reset } = form;
  const handleReset = () => {
    reset();
  };
  return (
    <StyledButton type="reset" onClick={handleReset}>
      Reset
    </StyledButton>
  );
}
