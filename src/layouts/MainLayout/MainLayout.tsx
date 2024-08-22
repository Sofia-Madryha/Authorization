import { Box, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <VStack h={"100vh"}>
      <header>Main Header</header>
      <Box as="main" display={"flex"}>
        <Outlet />
      </Box>
      <footer>Main Footer</footer>
    </VStack>
  );
};

export default MainLayout;
