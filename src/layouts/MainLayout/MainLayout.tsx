import { Box, Container, VStack } from "@chakra-ui/react";
import { Cookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/ui";

const MainLayout = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove("token");
    navigate("/", { replace: true });
  };

  return (
    <VStack
      h={"100vh"}
      padding={"20px 0"}
      align={"start"}
      alignItems={"center"}
    >
      <Box
        maxW={{
          base: "360px",
          sm: "420px",
          md: "768px",
          lg: "1024px",
          xl: "1440px"
        }}
        padding={{
          base: "10px 16px",
          sm: "10px 24px",
          md: "10px 60px",
          lg: "10px 100px",
          xl: "10px 140px"
        }}
        w={"100%"}
      >
        <Button variant="outlined" onClick={logOut}>
          log out
        </Button>
      </Box>
      <Box as="main" display={"flex"}>
        <Container
          maxW={{
            base: "360px",
            sm: "420px",
            md: "768px",
            lg: "1024px",
            xl: "1440px"
          }}
          padding={{
            base: "10px 16px",
            sm: "10px 24px",
            md: "10px 60px",
            lg: "10px 100px",
            xl: "10px 140px"
          }}
          color={"black"}
        >
          {" "}
          <Outlet />
        </Container>
      </Box>
    </VStack>
  );
};

export default MainLayout;
