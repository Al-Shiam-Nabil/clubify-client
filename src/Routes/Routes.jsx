import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import LoginPage from "../Pages/Authentication/LoginPage";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../Layouts/DashboardLayout";

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
      element:<PublicRoute><RegisterPage></RegisterPage></PublicRoute>
      },{
        path:'login',
       element:<PublicRoute><LoginPage></LoginPage></PublicRoute>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>
  }
]);
