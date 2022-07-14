import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Complaints from "../Components/User/Complaints";
import Footer from "../Components/Footer/Footer";

const ComplaintsLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 m-auto bg-sky-200 p-10">
        <Complaints />
      </div>
      <Footer />
    </>
  );
};

export default ComplaintsLayout;
