import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-white shadow-lg py-2">
        <Link className="font-semibold text-lg" to="/user">
          <div className="w-20 h-20">
            <img
              src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <Link className="font-semibold text-lg" to="#">
          Home
        </Link>
        <Link className="font-semibold text-lg" to="#">
          About Us
        </Link>
        <Link className="font-semibold text-lg" to="#">
          What's New
        </Link>
        <Link className="font-semibold text-lg" to="#">
          Contact Us
        </Link>
        <Link className="font-semibold text-lg" to="#">
          Helpline Numbers
        </Link>
        <Link className="font-semibold text-lg" to="#">
          Others
        </Link>
        <Link className="font-semibold text-lg" to="/user/login">
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
