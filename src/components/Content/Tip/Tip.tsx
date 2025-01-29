import { useFormContext } from "react-hook-form";
import { FormInputs } from "../Main/Main";
import {
  StyledTipRadio,
  StyledTipContainer,
  StyledTipHeader,
  StyledTipOptions,
  StyledTipLabel,
  StyledTipNumber,
  StyledInput,
  StyledlWrapperForErrorHandling,
} from "./Tip.styles";
import { StyledError } from "../Bill/Bill.styles";
import { useEffect } from "react";

export default function Tip() {
  const {
    register,
    formState: { errors, dirtyFields },
    resetField,
    watch,
  } = useFormContext<FormInputs>();

  const customTipInput = watch("customTip");

  useEffect(() => {
    if (customTipInput !== undefined) {
      resetField("tip", { keepTouched: true });
    }
  }, [customTipInput, resetField]);

  return (
    <StyledTipContainer>
      <StyledlWrapperForErrorHandling>
        <StyledTipHeader>Select Tip %</StyledTipHeader>
        {errors.customTip?.message && (
          <StyledError>{errors.customTip.message}</StyledError>
        )}
      </StyledlWrapperForErrorHandling>

      <StyledTipOptions>
        {[5, 10, 15, 20, 25].map((tip) => (
          <StyledTipLabel key={tip} htmlFor={`${tip}`}>
            <StyledTipNumber>{tip}%</StyledTipNumber>
            <StyledTipRadio
              type="radio"
              value={tip}
              id={`${tip}`}
              {...register("tip", { valueAsNumber: true })}
              onClick={() => {
                resetField("customTip", { keepTouched: true });
              }}
            />
          </StyledTipLabel>
        ))}
        <StyledInput
          placeholder="Custom"
          type="number"
          inputMode="numeric"
          {...register("customTip", {
            valueAsNumber: true,
            validate: {
              zeroCheck: (fieldValue) => {
                if (dirtyFields.customTip) {
                  return (
                    (typeof fieldValue === "number" &&
                      !isNaN(fieldValue) &&
                      fieldValue >= 0) ||
                    "Can't be below zero"
                  );
                }
                return true;
              },
            },
          })}
        />
      </StyledTipOptions>
    </StyledTipContainer>
  );
}
