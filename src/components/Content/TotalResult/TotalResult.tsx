import { useFormContext } from "react-hook-form";
import ResultOutput from "../../ui/ResultOutput/ResultOutput";
import ResultText from "../../ui/ResultText/ResultText";
import { StyledTotalResltContainer } from "./TotalResult.styles";
import { FormInputs } from "../Main/Main";

export default function TotalResult() {
  const form = useFormContext<FormInputs>();
  const {
    formState: { isValid },
    watch,
  } = form;
  const bill = watch("bill");
  const selectedTip = watch("tip");
  const customTip = watch("customTip");
  const finalTip = Number(selectedTip / 100) || customTip || 0;
  const peopleNumber = watch("people");
  const totalEach = ((bill + finalTip) / peopleNumber).toFixed(2);
  return (
    <StyledTotalResltContainer>
      <ResultText parg1="Total" parg2="/person" />
      <ResultOutput>{isValid === true ? totalEach : "0.00"}</ResultOutput>
    </StyledTotalResltContainer>
  );
}
