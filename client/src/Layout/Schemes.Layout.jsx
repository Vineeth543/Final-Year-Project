import React from "react";
import UserNavbar from "../Components/User/Navbar";
import Schemes from "../Components/User/Schemes";
import Footer from "../Components/Footer/Footer";

const SchemesLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="container flex flex-col gap-10 m-auto bg-sky-100 p-8 my-2">
        <Schemes />
      </div>
      <Footer />
    </>
  );
};

export default SchemesLayout;
