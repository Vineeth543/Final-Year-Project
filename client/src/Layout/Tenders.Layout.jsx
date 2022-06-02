import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Tenders from "../Components/User/Tenders";
import Footer from "../Components/Footer/Footer";

const TendersLayout = () => {
  return (
    <>
      <div className=" bg-sky-100">
        <UserNavbar />
        <Tenders />
        <Footer />
      </div>
    </>
  );
};

export default TendersLayout;
