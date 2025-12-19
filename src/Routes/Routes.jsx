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
import ClubMemberPage from "../Pages/Dashboard/Manager/ClubMemberPage";
import EventManagementPage from "../Pages/Dashboard/Manager/EventManagementPage";
import EventRegistrationsPage from "../Pages/Dashboard/Manager/EventRegistrationsPage";
import CreateEventPage from "../Pages/Dashboard/Manager/CreateEventPage";
import MemberDashboardHome from "../Pages/Dashboard/Member/MemberDashboardHome";
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import MemberRoute from "./MemberRoute";
import ManageUsersPage from "../Pages/Dashboard/Admin/manageUsersPage";
import TransactionsPage from "../Pages/Dashboard/Admin/TransactionsPage";
import MemberMyClubPage from "../Pages/Dashboard/Member/MemberMyClubPage";
import MyEventsPage from "../Pages/Dashboard/Member/MyEventsPage";
import PaymentHistoryPage from "../Pages/Dashboard/Member/PaymentHistoryPage";
import AllClubsPage from "../Pages/AllClubs/AllClubsPage";
import AllEvents from "../Pages/AllEvents/AllEvents";

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
        path: "all-clubs",
        Component: AllClubsPage,
      },{
        path:'all-events',
        Component:AllEvents
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
        <AdminRoute>
          <DashboardLayout></DashboardLayout>
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: AdminDashboardHome,
      },
      {
        path: "club-requests",
        element: <ClubRequestsPage></ClubRequestsPage>,
      },
      {
        path: "manage-users",
        element: <ManageUsersPage></ManageUsersPage>,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
      },
    ],
  },
  {
    path: "dashboard/manager",
    element: (
      <PrivateRoute>
        <ManagerRoute>
          {" "}
          <DashboardLayout></DashboardLayout>
        </ManagerRoute>
      </PrivateRoute>
    ),

    children: [
      {
        index: true,
        element: <ManagerDashboardHome></ManagerDashboardHome>,
      },
      {
        path: "my-clubs",
        element: <MyClubPage></MyClubPage>,
      },
      {
        path: "club-members",
        element: <ClubMemberPage></ClubMemberPage>,
      },
      {
        path: "events-management",
        element: <EventManagementPage></EventManagementPage>,
      },
      {
        path: "event-registrations",
        element: <EventRegistrationsPage></EventRegistrationsPage>,
      },
      {
        path: "create-event",
        element: <CreateEventPage></CreateEventPage>,
      },
    ],
  },
  {
    path: "dashboard/member",
    element: (
      <PrivateRoute>
        <MemberRoute>
          <DashboardLayout></DashboardLayout>
        </MemberRoute>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <MemberDashboardHome></MemberDashboardHome>,
      },
      {
        path: "my-clubs",
        element: <MemberMyClubPage></MemberMyClubPage>,
      },
      {
        path: "my-events",
        element: <MyEventsPage></MyEventsPage>,
      },
      {
        path: "payment-history",
        element: <PaymentHistoryPage></PaymentHistoryPage>,
      },
    ],
  },
]);
