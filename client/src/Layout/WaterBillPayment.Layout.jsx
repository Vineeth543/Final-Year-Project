import React from "react";

import UserNavbar from "../Components/User/Navbar";
import WaterBillPayment from "../Components/User/Payments/WaterBillPayment";
import Footer from "../Components/Footer/Footer";

const WaterBillPaymentLayout = () => {
  return (
    <>
      <UserNavbar />
      <WaterBillPayment />
      <Footer />
    </>
  );
};

export default WaterBillPaymentLayout;
