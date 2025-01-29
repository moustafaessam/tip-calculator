import Input from "../../ui/Input/Input";
import { StyledPeople, StyledPeopleHeader } from "./People.styles";

export default function People() {
  return (
    <StyledPeople htmlFor="people">
      <StyledPeopleHeader>Number of People</StyledPeopleHeader>
      <Input src="/images/icon-person.svg" id="people" name="people" />
    </StyledPeople>
  );
}
