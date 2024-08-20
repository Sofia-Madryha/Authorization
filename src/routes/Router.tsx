import { createBrowserRouter } from "react-router-dom";

import { LogInPage } from "../modules/auth";
import { HomePage } from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <LogInPage /> },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/home", element: <HomePage /> }]
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>
  }
]);

export default router;
