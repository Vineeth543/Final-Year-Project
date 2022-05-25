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
        <h1 className="font-semibold text-lg">Home</h1>
        <h1 className="font-semibold text-lg">About Us</h1>
        <h1 className="font-semibold text-lg">e-Services</h1>
        <h1 className="font-semibold text-lg">What's New</h1>
        <h1 className="font-semibold text-lg">Contact Us</h1>
        <h1 className="font-semibold text-lg">Helpline Numbers</h1>
      </div>
    </>
  );
};

export default Navbar;
