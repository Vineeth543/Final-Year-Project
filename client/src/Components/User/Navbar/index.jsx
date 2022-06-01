import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <>
      <>
        <div className="flex items-center justify-evenly bg-white shadow-lg my-2">
          <Link className="font-semibold text-lg" to="/user">
            <div className="w-20 h-20">
              <img
                src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
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
          <Link className="font-semibold text-lg" to="/user/notifications">
            Notifications
          </Link>
          <div className="flex gap-5">
            <Link className="font-semibold text-lg" to="/user/login">
              SignIn
            </Link>
            <Link className="font-semibold text-lg" to="/user/signup">
              SignUp
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default UserNavbar;
