import { FormControl, FormLabel, Text } from "@chakra-ui/react";
import { FormFieldProps } from "./FormField.types";

const FormField = ({
  children,
  label,
  errorMessage,
  isRequired
}: FormFieldProps) => {
  return (
    <FormControl width={"100%"}>
      {label ? (
        <FormLabel
          w={"100%"}
          mb={"8px"}
          fontSize={"14px"}
          lineHeight={"20px"}
          fontWeight={"600"}
        >
          {label}
          {isRequired && (
            <Text as="span" color={"green.500"} ml="1px">
              *
            </Text>
          )}
        </FormLabel>
      ) : null}
      {children}

      {errorMessage ? (
        <Text color={"red"} fontSize={"10px"}>
          {errorMessage}
        </Text>
      ) : null}
    </FormControl>
  );
};

export default FormField;
