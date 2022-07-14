import React from "react";

import UserNavbar from "../Components/User/Navbar";
import TenderApply from "../Components/User/Tenders/TenderApply";
import Footer from "../Components/Footer/Footer";

const TenderApplyLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 py-10 bg-sky-100">
        <TenderApply />
      </div>
      <Footer />
    </>
  );
};

export default TenderApplyLayout;
