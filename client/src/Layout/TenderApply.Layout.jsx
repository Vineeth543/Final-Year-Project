import React from "react";

import UserNavbar from "../Components/User/Navbar";
import TenderApply from "../Components/User/Tenders/TenderApply";
import Footer from "../Components/Footer/Footer";

const TenderApplyLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
        <UserNavbar />
        <TenderApply />
        <Footer />
      </div>
    </>
  );
};

export default TenderApplyLayout;
