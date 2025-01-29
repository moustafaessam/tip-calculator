import ResultText from "../../ui/ResultText/ResultText";
import { StyledTipResltContainer } from "./TipResult.styles";
import ResultOutput from "../../ui/ResultOutput/ResultOutput";

export default function TipResult() {
  return (
    <StyledTipResltContainer>
      <ResultText parg1="Tip Amount" parg2="/ person"></ResultText>
      <ResultOutput />
    </StyledTipResltContainer>
  );
}
