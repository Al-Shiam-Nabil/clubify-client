import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import LoginPage from "../Pages/Authentication/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },{
        path:'register',
        Component:RegisterPage
      },{
        path:'login',
        Component:LoginPage
      }
    ],
  },
]);
