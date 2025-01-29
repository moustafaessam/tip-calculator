import { StyledResult } from "./Result.styles";

type ResultProps = {
  children: React.ReactNode;
};

export default function Result({ children }: ResultProps) {
  return <StyledResult>{children}</StyledResult>;
}
