import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider, useQueryClientProvider } from "./providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CSSReset } from "@chakra-ui/react";

function App() {
  const queryClient = useQueryClientProvider();

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <ChakraProvider>
        <RouterProvider router={router} />
        <CSSReset />
      </ChakraProvider>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
