import { ReactNode } from "react";

export interface FormFieldProps {
  label?: string;
  errorMessage?: any;
  children: ReactNode;
  isRequired?: boolean;
}
