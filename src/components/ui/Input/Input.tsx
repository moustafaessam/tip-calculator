import { useFormContext } from "react-hook-form";
import { StyledInputContainer, StyledInput } from "./Input.styles";
import { FormInputs } from "../../Content/Main/Main";
import { useState } from "react";

type InputProps = {
  src: string;
  id: string;
  name: keyof FormInputs;
  error: boolean;
};

export default function Input({ src, id, name, error }: InputProps) {
  const form = useFormContext<FormInputs>();
  const { register } = form;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <StyledInputContainer styleError={error} isFocused={isFocused}>
      <img src={src} />
      <StyledInput
        placeholder="0"
        type="number"
        id={id}
        {...register(name, {
          valueAsNumber: true,
          required: { value: true, message: "Can't be zero or below" },
          validate: {
            zeroCheck: (fieldValue) => {
              return (
                (typeof fieldValue === "number" &&
                  !isNaN(fieldValue) &&
                  fieldValue > 0) ||
                "Can't be zero or below"
              );
            },
          },
        })}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </StyledInputContainer>
  );
}
