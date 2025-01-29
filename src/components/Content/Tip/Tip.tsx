import {
  StyledTipRadio,
  StyledTipContainer,
  StyledTipHeader,
  StyledTipOptions,
  StyledTipLabel,
  StyledTipNumber,
} from "./Tip.styles";

import { useFormContext } from "react-hook-form";
import { FormInputs } from "../Main/Main";

export default function Tip() {
  const { register } = useFormContext<FormInputs>();
  return (
    <StyledTipContainer>
      <StyledTipHeader>Select Tip %</StyledTipHeader>
      <StyledTipOptions>
        <StyledTipLabel htmlFor="5">
          <StyledTipNumber>5%</StyledTipNumber>
          <StyledTipRadio type="radio" value="5" id="5" {...register("tip")} />
        </StyledTipLabel>
        <StyledTipLabel htmlFor="10">
          <StyledTipNumber>10%</StyledTipNumber>
          <StyledTipRadio
            type="radio"
            value="10"
            id="10"
            {...register("tip")}
          />
        </StyledTipLabel>
        <StyledTipLabel htmlFor="15">
          <StyledTipNumber>15%</StyledTipNumber>
          <StyledTipRadio
            type="radio"
            value="15"
            id="15"
            {...register("tip")}
          />
        </StyledTipLabel>
        <StyledTipLabel htmlFor="20">
          <StyledTipNumber>20%</StyledTipNumber>
          <StyledTipRadio
            type="radio"
            value="20"
            id="20"
            {...register("tip")}
          />
        </StyledTipLabel>
        <StyledTipLabel htmlFor="25">
          <StyledTipNumber>25%</StyledTipNumber>
          <StyledTipRadio
            type="radio"
            value="25"
            id="25"
            {...register("tip")}
          />
        </StyledTipLabel>
        <StyledTipLabel htmlFor="30">
          <StyledTipNumber>30%</StyledTipNumber>
          <StyledTipRadio
            type="radio"
            value="30"
            id="30"
            {...register("tip")}
          />
        </StyledTipLabel>
      </StyledTipOptions>
    </StyledTipContainer>
  );
}
