import React from "react";

import VillageCarousals from "../Components/User/Home/Carousals/Carousals";
import VillageNavbar from "../Components/User/Navbar";
import Footer from "../Components/Footer/Footer";
import UserHomeJourney from "../Components/User/Home/Journey";
import UserHomePageEvents from "../Components/User/Home/Events";
import UserHomePageComplaints from "../Components/User/Home/Complaints";
import UserHomePageTenders from "../Components/User/Home/Tenders";

const UserHomeLayout = () => {
  return (
    <>
      <VillageNavbar />
      <VillageCarousals />
      <div className="flex flex-col bg-sky-100 gap-10">
        <UserHomeJourney />
        <UserHomePageComplaints />
        <UserHomePageTenders />
        <UserHomePageEvents />
        <Footer />
      </div>
    </>
  );
};

export default UserHomeLayout;
