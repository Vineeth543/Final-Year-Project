import React from "react";

const VillageNavbar = () => {
  return (
    <>
      <>
        <div className="flex items-center justify-evenly bg-white shadow-lg my-2">
          <div className="w-20 h-20">
            <img
              src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <h1 className="font-semibold text-lg">Home</h1>
          <h1 className="font-semibold text-lg">e-Services</h1>
          <h1 className="font-semibold text-lg">Events</h1>
          <h1 className="font-semibold text-lg">Payments</h1>
          <h1 className="font-semibold text-lg">Complaints</h1>
          <h1 className="font-semibold text-lg">Notifications</h1>
          <div className="flex gap-5">
            <h1 className="font-semibold text-lg">SignIn</h1>
            <h1 className="font-semibold text-lg">SignUp</h1>
          </div>
        </div>
      </>
    </>
  );
};

export default VillageNavbar;