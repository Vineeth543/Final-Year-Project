import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-white shadow-lg">
        <div className="w-20 h-20">
          <img
            src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>e-Services</h1>
        <h1>What's New</h1>
        <h1>Contact Us</h1>
        <h1>Helpline Numbers</h1>
      </div>
    </>
  );
};

export default Navbar;
