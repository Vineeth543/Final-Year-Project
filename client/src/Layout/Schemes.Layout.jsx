import React from "react";
import UserNavbar from "../Components/User/Navbar";
import Schemes from "../Components/User/Schemes";
import Footer from "../Components/Footer/Footer";

const SchemesLayout = () => {
  return (
    <>
      <div className="container mx-auto bg-sky-100 scrollbar-hide">
        <UserNavbar />
        <Schemes />
        <Footer />
      </div>
    </>
  );
};

export default SchemesLayout;
