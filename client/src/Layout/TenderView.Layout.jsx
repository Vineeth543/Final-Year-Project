import React from "react";

import UserNavbar from "../Components/User/Navbar";
import ViewTender from "../Components/User/Tenders/ViewTender";
import Footer from "../Components/Footer/Footer";

const ViewTenderLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 py-10 bg-sky-100">
        <ViewTender />
      </div>
      <Footer />
    </>
  );
};

export default ViewTenderLayout;
