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
      <div className="flex items-center justify-evenly bg-white shadow-lg py-2 scrollbar-hide">
        <Link className="font-semibold text-lg" to="/">
          <div className="w-20 h-20">
            <img
              src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/logo512.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <Link className="font-semibold text-lg" to="/user">
          Home
        </Link>
        <Link className="font-semibold text-lg" to="/user/services">
          e-Services
        </Link>
        <Link className="font-semibold text-lg" to="/user/schemes">
          Schemes
        </Link>
        <Link className="font-semibold text-lg" to="/user/events">
          Events
        </Link>
        <Link className="font-semibold text-lg" to="/user/tenders">
          e-Tenders
        </Link>
        <Link className="font-semibold text-lg" to="/user/payments">
          Payments
        </Link>
        <Link className="font-semibold text-lg" to="/user/complaints">
          Complaints
        </Link>
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
              <Link to="/user/dashboard">Dashboard</Link>
              <Link to={path.pathname} onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link className="font-semibold text-lg" to="/user/login">
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default UserNavbar;
