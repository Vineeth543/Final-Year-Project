import React from "react";
import Footer from "../Components/Footer/Footer";
import Events from "../Components/User/Events";
import VillageNavbar from "../Components/User/Navbar";

const EventsLayout = () => {
  return (
    <>
      <VillageNavbar />
      <Events />
      <Footer />
    </>
  );
};

export default EventsLayout;
