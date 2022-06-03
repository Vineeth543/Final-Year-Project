import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const [Menus] = useState([
    {
      title: "Dashboard",
      src: "https://cdn-icons-png.flaticon.com/512/726/726488.png",
    },
    {
      title: "Services",
      src: "https://cdn-icons-png.flaticon.com/512/792/792152.png",
    },
    {
      title: "Schemes",
      src: "https://cdn-icons-png.flaticon.com/512/726/726488.png",
    },
    {
      title: "Events",
      src: "https://cdn-icons-png.flaticon.com/512/792/792152.png",
    },
    {
      title: "Tenders",
      src: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    },
    {
      title: "Payments",
      src: "https://cdn-icons-png.flaticon.com/512/726/726488.png",
    },
    {
      title: "Complaints",
      src: "https://cdn-icons-png.flaticon.com/512/792/792152.png",
    },
    {
      title: "Users",
      src: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    },
  ]);

  const page = useLocation();

  return (
    <>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen py-4 relative duration-300`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2879/2879593.png"
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex bg-white gap-x-4 items-center pl-4">
          <img
            src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
            alt="logo"
            className={`w-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`flex text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Grama
          </h1>
        </div>
        <ul className="w-full h-full bg-blue-700">
          {Menus.map((Menu, index) => (
            <Link
              to={`/admin/${Menu.title.toLowerCase()}`}
              key={Menu.title.toLowerCase()}
            >
              <li
                key={index}
                className={`flex p-2 pl-5 mt-4 hover:text-white text-black text-lg font-semibold items-center gap-x-4 ${
                  page.pathname === `/admin/${Menu.title.toLowerCase()}` &&
                  "bg-light-white"
                } `}
              >
                <img src={Menu.src} alt="icon" className="w-8" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
