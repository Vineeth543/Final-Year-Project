import React from "react";

import UserNavbar from "../Components/User/Navbar";
import HouseTaxPayment from "../Components/User/Payments/HouseTaxPayment";
import Footer from "../Components/Footer/Footer";

const HouseTaxPaymentLayout = () => {
  return (
    <>
      <UserNavbar />
      <HouseTaxPayment />
      <Footer />
    </>
  );
};

export default HouseTaxPaymentLayout;
