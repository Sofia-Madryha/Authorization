import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import { LogInPage } from "@/modules/auth";
import { AuthLayout, MainLayout } from "@/layouts";
import { HomePage } from "@/modules/blog";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/", element: <LogInPage /> }]
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: "/home", element: <HomePage /> }]
      }
    ]
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>
  }
]);

export default router;
