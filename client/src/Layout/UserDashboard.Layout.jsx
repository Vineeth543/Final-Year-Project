import React from "react";

import UserNavbar from "../Components/User/Navbar";
import UserDashboard from "../Components/User/Dashboard/index";
import Footer from "../Components/Footer/Footer";

const UserDashboardLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 py-8 mt-2 bg-sky-100">
        <UserDashboard />
      </div>
      <Footer />
    </>
  );
};

export default UserDashboardLayout;
