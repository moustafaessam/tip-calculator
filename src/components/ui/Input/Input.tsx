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
      <StyledInput
        type="number"
        id={id}
        {...register(name, {
          valueAsNumber: true,
          required: { value: true, message: "Can't be zero" },
          validate: {
            zeroCheck: (fieldValue) => {
              return (
                (typeof fieldValue === "number" &&
                  !isNaN(fieldValue) &&
                  fieldValue > 0) ||
                "Can't be zero"
              );
            },
          },
        })}
      />
    </StyledInputContainer>
  );
}
