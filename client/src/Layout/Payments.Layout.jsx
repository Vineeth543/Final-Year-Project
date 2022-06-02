import React from "react";

import UserNavbar from "../Components/User/Navbar";
import Payements from "../Components/User/Payments";
import Footer from "../Components/Footer/Footer";

const PaymentsLayout = () => {
  return (
    <>
      <UserNavbar />
      <Payements />
      <Footer />
    </>
  );
};

export default PaymentsLayout;
