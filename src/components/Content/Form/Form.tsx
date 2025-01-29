import { StyledForm } from "./Form.styles";

type FormProps = {
  children: React.ReactNode;
};

export default function Form({ children }: FormProps) {
  return <StyledForm>{children}</StyledForm>;
}
