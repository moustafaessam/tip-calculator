import ResultText from "../../ui/ResultText/ResultText";
import { StyledTipResultContainer } from "./TipResult.styles";
import ResultOutput from "../../ui/ResultOutput/ResultOutput";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../Main/Main";

export default function TipResult() {
  const form = useFormContext<FormInputs>();
  const {
    formState: { isValid },
    watch,
  } = form;
  const selectedTip = watch("tip");
  const customTip = watch("customTip");
  const finalTip = Number(selectedTip / 100) || customTip || 0;
  const totalTip = Number(finalTip).toFixed(2);

  return (
    <StyledTipResultContainer>
      <ResultText parg1="Tip Amount" parg2="/ person"></ResultText>
      <ResultOutput>{isValid === true ? totalTip : "0.00"}</ResultOutput>
    </StyledTipResultContainer>
  );
}
