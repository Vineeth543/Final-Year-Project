import React from "react";

import VillageCarousals from "../Components/User/Home/Carousals/Carousals";
import VillageNavbar from "../Components/User/Navbar";
import Footer from "../Components/Footer/Footer";
import UserHomePageComplaints from "../Components/User/Home/Complaints";
import UserHomeJourney from "../Components/User/Home/Journey";

const UserHomeLayout = () => {
  return (
    <>
      <div className="bg-sky-100">
        <VillageNavbar />
        <VillageCarousals />
        {/* <UserHomePageComplaints /> */}
        <UserHomeJourney />
        <Footer />
      </div>
    </>
  );
};

export default UserHomeLayout;
