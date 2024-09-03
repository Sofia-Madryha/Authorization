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
    element: <ProtectedRoute allowedRoles={["SUPERADMIN", "ADMIN"]} />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: "/home", element: <HomePage /> }]
      }
    ]
  },

  {
    element: <ProtectedRoute allowedRoles={["SUPERADMIN"]} />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: "/admin", element: <div> ADMIN PAGE</div> }]
      }
    ]
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>
  }
]);

export default router;
