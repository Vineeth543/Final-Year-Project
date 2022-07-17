import React from "react";

import UserNavbar from "../Components/User/Navbar";
import UserProfile from "../Components/User/Dashboard/profile";
import Footer from "../Components/Footer/Footer";

const UserProfileLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="bg-sky-100">
        <UserProfile />
      </div>
      <Footer />
    </>
  );
};

export default UserProfileLayout;
