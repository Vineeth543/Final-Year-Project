import React from "react";
import Footer from "../Components/Footer/Footer";
import MoreEvents from "../Components/User/Events/MoreEvents";
import UserNavbar from "../Components/User/Navbar";

const MoreEventsLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="container m-auto my-5">
        <MoreEvents />
      </div>
      <Footer />
    </>
  );
};

export default MoreEventsLayout;
