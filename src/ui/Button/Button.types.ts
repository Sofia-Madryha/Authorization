import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  variant?: string;
  onClick?: () => void;
  children?: any;
  isDisabled?: boolean;
}
