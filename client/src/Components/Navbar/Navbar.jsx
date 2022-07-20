import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-white shadow-lg py-2">
        <Link className="font-semibold text-lg" to="/user">
          <div className="w-32 h-18">
            <img
              src="https://citizen-centric-panchayat-system.s3.ap-south-1.amazonaws.com/logo.png"
              alt="logo"
              className="w-full h-full object-cove"
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
      </div>
    </>
  );
};

export default Navbar;
