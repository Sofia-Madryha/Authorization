import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../apis";
import { Cookies } from "react-cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthorizationSchema } from "../../validations";
import { Box, Text } from "@chakra-ui/react";
import { Button, Input } from "../../../../ui";

const LogInForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AuthorizationSchema),

    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (data: any) => mutateSignIn(data);

  const { mutate: mutateSignIn } = useSignIn({
    onSuccess: (data) => {
      const token = data.access_token;

      cookies.set("token", token);

      reset();

      navigate("/home");
    }
  });

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w={"400px"}
      h={"400px"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"white"}
      padding={"0 24px"}
      gap={"20px"}
    >
      <Text textStyle={"h1"} mb={"53px"}>
        Login
      </Text>
      <Input
        errorMessage={errors.email?.message}
        {...register("email")}
        placeholder="Email"
      />

      <Input
        errorMessage={errors.password?.message}
        {...register("password")}
        placeholder="Password"
        type="password"
      />
      <Button>Login</Button>
    </Box>
  );
};

export default LogInForm;
