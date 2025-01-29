import { StyledMain } from "./Main.styles";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type MainProps = {
  children: React.ReactNode;
};

export type FormInputs = {
  bill: number;
  tip: number;
  people: number;
  customTip: number;
};

export default function Main({ children }: MainProps) {
  const form = useForm<FormInputs>({ mode: "onChange" });
  const { control } = form;
  return (
    <FormProvider {...form}>
      <StyledMain noValidate>{children}</StyledMain>
      <DevTool control={control} />
    </FormProvider>
  );
}
