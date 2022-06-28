import React from "react";

import UserNavbar from "../Components/User/Navbar";
import ApplyService from "../Components/User/Services/ApplyService";
import Footer from "../Components/Footer/Footer";

const ApplyServiceLayout = () => {
  return (
    <>
      <UserNavbar />
      <ApplyService />
      <Footer />
    </>
  );
};

export default ApplyServiceLayout;
