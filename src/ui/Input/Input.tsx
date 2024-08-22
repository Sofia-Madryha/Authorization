"use client";
import { Input as ChakraInput, forwardRef } from "@chakra-ui/react";
import { FormField } from "../FormField";
import { InputProps } from "./Input.types";

const Input = forwardRef(
  ({ errorMessage, isRequired, ...props }: InputProps, ref) => {
    return (
      <FormField errorMessage={errorMessage} isRequired={isRequired}>
        <ChakraInput
          _hover={{
            borderColor: "blue.100"
          }}
          _focusVisible={{
            borderColor: "blue.100"
          }}
          ref={ref}
          height={"40px"}
          border={"2px solid"}
          borderColor={"blue.200"}
          borderRadius="20px"
          padding={"11px 10px"}
          {...props}
        />{" "}
      </FormField>
    );
  }
);

export default Input;
