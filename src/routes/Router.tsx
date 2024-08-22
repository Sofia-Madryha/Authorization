import { createBrowserRouter } from "react-router-dom";

import { LogInPage } from "../modules/auth";
import { HomePage } from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { MainLayout, AuthLayout } from "../layouts";

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
