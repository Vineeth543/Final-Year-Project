import React from "react";

import UserNavbar from "../Components/User/Navbar";
import UserDashboard from "../Components/User/Dashboard/index";
import Footer from "../Components/Footer/Footer";

const UserDashboardLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
        <UserNavbar />
        <UserDashboard />
        <Footer />
      </div>
    </>
  );
};

export default UserDashboardLayout;
