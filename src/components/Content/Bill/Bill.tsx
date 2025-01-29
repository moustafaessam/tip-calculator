import {
  StyledBill,
  StyledBillHeader,
  StyledBillWrapperForErrorHandling,
  StyledError,
} from "./Bill.styles";
import Input from "../../ui/Input/Input";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../Main/Main";

export default function Bill() {
  const {
    formState: { errors },
  } = useFormContext<FormInputs>();
  console.log(errors.bill);
  return (
    <StyledBill htmlFor="bill">
      <StyledBillWrapperForErrorHandling>
        <StyledBillHeader>Bill</StyledBillHeader>
        {errors.bill?.message && (
          <StyledError>{errors.bill.message}</StyledError>
        )}
      </StyledBillWrapperForErrorHandling>

      <Input
        src="/images/icon-dollar.svg"
        id="bill"
        name="bill"
        error={errors.bill === undefined ? false : true}
      />
    </StyledBill>
  );
}
