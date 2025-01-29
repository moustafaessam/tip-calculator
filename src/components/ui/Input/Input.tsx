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
        type="number"
        id={id}
        placeholder="0"
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
        onFocus={(e) => {
          console.log(setIsFocused(true));
          form.setValue(name, e.target.value, { shouldTouch: true });
        }}
        onBlur={() => {
          console.log(setIsFocused(false));
        }}
      />
    </StyledInputContainer>
  );
}
