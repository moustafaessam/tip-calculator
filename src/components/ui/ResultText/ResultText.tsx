import {
  StyledContainer,
  StyledParg1,
  StyledParg2,
} from "./ResultText.styles.";

type ResultTest = {
  parg1: string;
  parg2: string;
};

export default function ResultText({ parg1, parg2 }: ResultTest) {
  return (
    <StyledContainer>
      <StyledParg1>{parg1}</StyledParg1>
      <StyledParg2>{parg2}</StyledParg2>
    </StyledContainer>
  );
}
