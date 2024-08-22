import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface ErrorResponse {
  message: string;
}

const useQueryClientProvider = () => {
  const errorHandler = (error: AxiosError<ErrorResponse>) => {
    const message = error?.response?.data?.message;
    switch (error?.response?.status) {
      case 400:
        if (Array.isArray(message)) {
          toast.error(message.join(", "));
        } else {
          toast.error(message || "Something went wrong!");
        }
        break;

      case 403:
        toast.error("Invalid email or password");
        break;

      default:
        toast.error("Something went wrong!");
        break;
    }
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0
          }
        },
        queryCache: new QueryCache({
          onError: (error: any) => errorHandler(error)
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => errorHandler(error)
        })
      })
  );

  return queryClient;
};

export default useQueryClientProvider;
