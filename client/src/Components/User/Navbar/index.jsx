import React from "react";

const UserNavbar = () => {
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
          <h1 className="font-semibold text-lg cursor-pointer">Home</h1>
          <h1 className="font-semibold text-lg cursor-pointer">e-Services</h1>
          <h1 className="font-semibold text-lg cursor-pointer">Events</h1>
          <h1 className="font-semibold text-lg cursor-pointer">Payments</h1>
          <h1 className="font-semibold text-lg cursor-pointer">Complaints</h1>
          <h1 className="font-semibold text-lg cursor-pointer">Notifications</h1>
          <div className="flex gap-5">
            <h1 className="font-semibold text-lg cursor-pointer">SignIn</h1>
            <h1 className="font-semibold text-lg cursor-pointer">SignUp</h1>
          </div>
        </div>
      </>
    </>
  );
};

export default UserNavbar;
