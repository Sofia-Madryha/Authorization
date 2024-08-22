import { Button as ChakraButton } from "@chakra-ui/react";

import { ButtonProps } from "./Button.types";

const Button = ({
  variant = "primary",
  onClick,
  children,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      type="submit"
      isDisabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
