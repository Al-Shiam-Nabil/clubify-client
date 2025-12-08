import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0">

        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
