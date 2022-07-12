import React from "react";
import Footer from "../Components/Footer/Footer";
import Events from "../Components/User/Events";
import UserNavbar from "../Components/User/Navbar";

const EventsLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="container m-auto my-5">
        <Events />
      </div>
      <Footer />
    </>
  );
};

export default EventsLayout;
