import { StyledBill, StyledBillHeader } from "./Bill.styles";
import Input from "../../ui/Input/Input";

export default function Bill() {
  return (
    <StyledBill htmlFor="bill">
      <StyledBillHeader>Bill</StyledBillHeader>
      <Input src="/images/icon-dollar.svg" id="bill" name="bill" />
    </StyledBill>
  );
}
