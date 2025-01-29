import { StyledButton } from "./Reset.styles";
import { FormInputs } from "../Main/Main";
import { useFormContext } from "react-hook-form";

export default function Reset() {
  const form = useFormContext<FormInputs>();
  const { resetField } = form;
  const handleReset = () => {
    resetField("bill");
    resetField("people");
    resetField("tip");
    resetField("customTip");
  };
  return (
    <StyledButton type="reset" onClick={handleReset}>
      Reset
    </StyledButton>
  );
}
