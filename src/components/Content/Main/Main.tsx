import { StyledMain } from "./Main.styles";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type MainProps = {
  children: React.ReactNode;
};

export type FormInputs = {
  bill: number;
  tip: string;
  people: number;
};

export default function Main({ children }: MainProps) {
  const form = useForm<FormInputs>({
    defaultValues: {
      bill: 0,
      tip: "",
      people: 0,
    },
  });
  const { control, handleSubmit } = form;
  function onSubmit(data: FormInputs) {
    console.log(data);
  }
  return (
    <FormProvider {...form}>
      <StyledMain onSubmit={handleSubmit(onSubmit)} noValidate>
        {children} <button type="submit">Submit</button>
      </StyledMain>
      <DevTool control={control} />
    </FormProvider>
  );
}
