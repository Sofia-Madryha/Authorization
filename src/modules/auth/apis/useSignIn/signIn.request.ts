import { AuthResponse } from "../auth.types";
import { SignInRequest } from "./signIn.types";
import instance from "../../shared/libs/instance";

export const requestSignIn = async (
  body: SignInRequest
): Promise<AuthResponse> => {
  return await instance.post("auth/signin", body);
};
