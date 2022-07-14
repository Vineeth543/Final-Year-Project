import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Tenders from "../Components/User/Tenders";
import Footer from "../Components/Footer/Footer";

const TendersLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 py-10 bg-sky-100">
        <Tenders />
      </div>
      <Footer />
    </>
  );
};

export default TendersLayout;
