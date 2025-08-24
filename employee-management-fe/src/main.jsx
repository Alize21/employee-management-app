import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import InsertPage from "./pages/insert.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import UpdatePage from "./pages/update.jsx";
import LoginPage from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/insert",
    element: <InsertPage />,
  },
  {
    path: "/update/:id",
    element: <UpdatePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
