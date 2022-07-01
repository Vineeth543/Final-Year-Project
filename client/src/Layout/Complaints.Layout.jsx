import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Complaints from "../Components/User/Complaints";
import Footer from "../Components/Footer/Footer";

const ComplaintsLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col items-center justify-center py-5 bg-sky-200">
        <Complaints />
      </div>
      <Footer />
    </>
  );
};

export default ComplaintsLayout;
