import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Complaints from "../Components/User/Complaints";
import Footer from "../Components/Footer/Footer";

const ComplaintsLayout = () => {
  return (
    <>
      <UserNavbar />
      <Complaints />
      <Footer />
    </>
  );
};

export default ComplaintsLayout;
