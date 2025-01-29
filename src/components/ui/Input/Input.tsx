import { useFormContext } from "react-hook-form";
import { StyledInputContainer, StyledInput } from "./Input.styles";
import { FormInputs } from "../../Content/Main/Main";

type InputProps = {
  src: string;
  id: string;
  name: keyof FormInputs;
};

export default function Input({ src, id, name }: InputProps) {
  const { register } = useFormContext<FormInputs>();
  return (
    <StyledInputContainer>
      <img src={src} />
      <StyledInput placeholder="0" type="text" id={id} {...register(name)} />
    </StyledInputContainer>
  );
}
