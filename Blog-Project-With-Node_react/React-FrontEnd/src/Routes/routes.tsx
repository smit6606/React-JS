import { createBrowserRouter } from "react-router";
import App from "../App";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: LoginPage,
      },
      {
        path: "/signUp",
        Component: SignUpPage,
      },
    ],
  },
]);
