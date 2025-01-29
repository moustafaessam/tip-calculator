import { StyledResultOutput } from "./ResultOutput.styles";

type ResultOutputProps = {
  children: React.ReactNode;
};

export default function ResultOutput({ children }: ResultOutputProps) {
  return <StyledResultOutput>${children}</StyledResultOutput>;
}
