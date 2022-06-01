import React from "react";
import UserNavbar from "../Components/User/Navbar";
import Schemes from "../Components/User/Schemes";
import Footer from "../Components/Footer/Footer";

const SchemesLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="container mx-auto bg-sky-100">
        <Schemes />
      </div>
      <Footer />
    </>
  );
};

export default SchemesLayout;
