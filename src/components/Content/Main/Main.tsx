import { StyledMain } from "./Main.styles";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type MainProps = {
  children: React.ReactNode;
};

export type FormInputs = {
  bill: string;
  tip: string;
  people: string;
};

export default function Main({ children }: MainProps) {
  const form = useForm<FormInputs>();
  const { control, handleSubmit } = form;
  function onSubmit(data: FormInputs) {
    console.log(data);
  }
  return (
    <FormProvider {...form}>
      <StyledMain onSubmit={handleSubmit(onSubmit)} noValidate>
        {children}
      </StyledMain>
      <DevTool control={control} />
    </FormProvider>
  );
}
