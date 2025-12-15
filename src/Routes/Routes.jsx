import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import LoginPage from "../Pages/Authentication/LoginPage";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import CreateClub from "../Pages/CreateClub/CreateClub";
import ClubRequestsPage from "../Pages/Dashboard/Admin/ClubRequestsPage";
import MyClubPage from "../Pages/Dashboard/Manager/MyClubPage";
import AdminDashboardHome from "../Pages/Dashboard/Admin/AdminDashboardHome";
import ManagerDashboardHome from "../Pages/Dashboard/Manager/ManagerDashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "register",
        element: (
          <PublicRoute>
            <RegisterPage></RegisterPage>
          </PublicRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <LoginPage></LoginPage>
          </PublicRoute>
        ),
      },
      {
        path: "create-club",
        element: (
          <PrivateRoute>
            <CreateClub></CreateClub>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children:[
    {
index:true,
Component:AdminDashboardHome
    },
      {
        path:'club-requests',
        element:<ClubRequestsPage></ClubRequestsPage>
      }
    ]
  },
  {
    path:'dashboard/manager',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,

  
    children:[
      {
        index:true,
        element:<ManagerDashboardHome></ManagerDashboardHome>
      },
      {
        path:'my-clubs',
        element:<MyClubPage></MyClubPage>
      }
    ]
  }
]);
