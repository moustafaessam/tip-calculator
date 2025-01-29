import ResultOutput from "../../ui/ResultOutput/ResultOutput";
import ResultText from "../../ui/ResultText/ResultText";
import { StyledTotalResltContainer } from "./TotalResult.styles";

export default function TotalResult() {
  return (
    <StyledTotalResltContainer>
      <ResultText parg1="Total" parg2="/person" />
      <ResultOutput />
    </StyledTotalResltContainer>
  );
}
