import React from "react";
import Footer from "../Components/Footer/Footer";
import Events from "../Components/User/Events";
import UserNavbar from "../Components/User/Navbar";

const EventsLayout = () => {
  return (
    <>
      <UserNavbar />
      <Events />
      <Footer />
    </>
  );
};

export default EventsLayout;
