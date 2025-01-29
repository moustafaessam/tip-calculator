import Input from "../../ui/Input/Input";
import { StyledPeople, StyledPeopleHeader } from "./People.styles";
import {
  StyledError,
  StyledBillWrapperForErrorHandling,
} from "../Bill/Bill.styles";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../Main/Main";

export default function People() {
  const {
    formState: { errors },
  } = useFormContext<FormInputs>();
  return (
    <StyledPeople htmlFor="people">
      <StyledBillWrapperForErrorHandling>
        <StyledPeopleHeader>Number of People</StyledPeopleHeader>
        {errors.people && errors?.people.message && (
          <StyledError>{errors.people.message}</StyledError>
        )}
      </StyledBillWrapperForErrorHandling>

      <Input src="/images/icon-person.svg" id="people" name="people" />
    </StyledPeople>
  );
}
