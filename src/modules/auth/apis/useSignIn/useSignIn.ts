import { useMutation } from "@tanstack/react-query";
import { requestSignIn } from "./signIn.request";
import { AuthResponse } from "../auth.types";
import { MutationOptions } from "@/modules/auth/shared/libs";

const useSignIn = (options?: MutationOptions<AuthResponse>) => {
  return useMutation({
    mutationFn: requestSignIn,
    ...options
  });
};

export default useSignIn;
