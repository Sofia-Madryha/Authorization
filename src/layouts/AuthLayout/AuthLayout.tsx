import { Outlet } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

const AuthLayout = () => {
  return (
    <VStack h={"100vh"}>
      <Box as="main" display={"flex"}>
        <Outlet />
      </Box>
    </VStack>
  );
};

export default AuthLayout;
