import React from "react";

import VillageCarousals from "../Components/User/Carousals/Carousals";
import VillageNavbar from "../Components/User/Navbar";
import Footer from "../Components/Footer/Footer";

const UserHomeLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
        <VillageNavbar />
        <VillageCarousals />
        <Footer />
      </div>
    </>
  );
};

export default UserHomeLayout;
