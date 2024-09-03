import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import { Cookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/ui";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const MainLayout = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove("token");
    navigate("/", { replace: true });
  };

  const [decodedToken, setDecodedToken] = useState<any>(null);

  const accessToken = cookies.get("token");

  useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode(accessToken);
      setDecodedToken(decoded);
    }
  }, [accessToken]);

  return (
    <VStack
      h={"100vh"}
      padding={"20px 0"}
      align={"start"}
      alignItems={"center"}
    >
      <HStack
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
        spacing={"10px"}
      >
        <Button variant="outlined" onClick={logOut}>
          log out
        </Button>

        {decodedToken?.role === "SUPERADMIN" && (
          <Link to={"/admin"}>Admin </Link>
        )}

        {decodedToken?.role === "SUPERADMIN" && <Link to={"/home"}>Home </Link>}
      </HStack>
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
