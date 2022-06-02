import React from "react";
import Services from "../Components/User/Services";
import UserNavbar from "../Components/User/Navbar";
import Footer from "../Components/Footer/Footer";

const ServiceLayout = () => {
  return (
    <>
      <div className="scrollbar-hide">
        <UserNavbar />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default ServiceLayout;
