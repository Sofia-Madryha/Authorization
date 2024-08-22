import React from "react";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraProviders({
  children
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={theme}> {children}</ChakraProvider>;
}
