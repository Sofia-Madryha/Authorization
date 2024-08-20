import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../apis";
import { Cookies } from "react-cookie";

const LogInForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (data: any) => mutateSignIn(data);

  const { mutate: mutateSignIn } = useSignIn({
    onSuccess: (data) => {
      const token = data.access_token;

      cookies.set("token", token);

      reset();

      navigate("/home");
    },
    onError: (error: Error) => {
      console.log(error);
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} placeholder="Password" type="password" />
      <input type="submit" />
    </form>
  );
};

export default LogInForm;
