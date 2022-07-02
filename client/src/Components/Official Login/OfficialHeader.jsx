import React from "react";
import { FaPowerOff } from "react-icons/fa";

const OfficialHeader = () => {
  const handleLogout = () => {
    alert("Logout Successful");
    // localStorage.removeItem("CCPS-Official-loggedIn");
    // localStorage.removeItem("CCPS-Official-Role");
    // window.location.href = "/login";
  };

  if (localStorage.getItem("CCPS-Official-loggedIn") === "true") {
    const official = localStorage.getItem("CCPS-Official-Role");
    return (
      <div className="flex font-bold text-4xl p-4 bg-blue-700 shadow-xl text-white">
        <h1 className="w-full text-center">{official} Dashboard</h1>
        <FaPowerOff className="cursor-pointer" onClick={handleLogout} />
      </div>
    );
  }
};

export default OfficialHeader;
