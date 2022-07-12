import React from "react";

import UserNavbar from "../Components/User/Navbar";
import ViewTender from "../Components/User/Tenders/ViewTender";
import Footer from "../Components/Footer/Footer";

const ViewTenderLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
      <UserNavbar />
      <ViewTender />
      <Footer />
      </div>
    </>
  );
};

export default ViewTenderLayout;
