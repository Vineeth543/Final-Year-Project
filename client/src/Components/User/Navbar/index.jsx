import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserNavbar = () => {
  const path = useLocation();

  const logout = () => {
    localStorage.removeItem("CCPS-loggedIn");
    localStorage.removeItem("CCPS-userID");
  };

  return (
    <>
      <div className="flex items-center justify-evenly bg-white shadow-lg py-2 scrollbar-hide font-semibold text-lg">
        <Link to="/">
          <div className="w-20 h-20">
            <img
              src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/logo512.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <Link to="/user">Home</Link>
        <Link to="/user/services">e-Services</Link>
        <Link to="/user/schemes">Schemes</Link>
        <Link to="/user/events">Events</Link>
        <Link to="/user/tenders">e-Tenders</Link>
        <Link to="/user/payments">Payments</Link>
        <Link to="/user/complaints">Complaints</Link>
        {localStorage.getItem("CCPS-loggedIn") === "true" ? (
          <div className="dropdown">
            <div className="w-10 h-10">
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-5.png"
                alt="userLogo"
                className="w-full h-full"
              />
            </div>
            <div className="dropdown-content">
              <Link to="/user/profile/account">Dashboard</Link>
              <Link to="/user/login" onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        ) : path.pathname.includes("/user/login") ? (
          <Link to="/user/signup" className="w-12">
            Signup
          </Link>
        ) : (
          <Link to="/user/login" className="w-12">
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default UserNavbar;
