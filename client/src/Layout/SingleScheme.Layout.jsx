import React from "react";

import UserNavbar from "../Components/User/Navbar";
import SingleScheme from "../Components/User/Schemes/SingleScheme";
import Footer from "../Components/Footer/Footer";

const SingleSchemeLayout = () => {
  return (
    <>
      <UserNavbar />
      <SingleScheme />
      <Footer />
    </>
  );
};

export default SingleSchemeLayout;
