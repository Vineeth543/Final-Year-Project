import React from "react";

import UserNavbar from "../Components/User/Navbar";
import ApplyService from "../Components/User/Services/ApplyService";
import Footer from "../Components/Footer/Footer";

const ApplyServiceLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 my-10">
        <ApplyService />
      </div>
      <Footer />
    </>
  );
};

export default ApplyServiceLayout;
