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
      title: "Complaints/all",
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
          open ? "w-64" : "w-20"
        } bg-blue-700 h-screen py-4 relative duration-300`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2879/2879593.png"
          alt="arrow"
          className={`absolute cursor-pointer -right-3 top-9 w-7 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex bg-white gap-x-4 items-center pl-4 bg-blue-700">
          <Link to="/" className="flex items-center gap-4 w-10 h-10">
            <img
              src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/logo512.png"
              alt="logo"
              className={`w-full h-full cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`flex text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              eGrama
            </h1>
          </Link>
        </div>
        <ul className="w-full h-full bg-blue-700">
          {Menus.map((Menu, index) => (
            <Link to={`/admin/${Menu.title.toLowerCase()}`} key={index}>
              <li
                key={index}
                className={`flex p-2 pl-5 mt-4 hover:text-white text-black text-lg font-semibold items-center gap-x-4 ${
                  page.pathname.includes(
                    "/admin/" + Menu.title.toLowerCase().split("/")[0]
                  ) && "bg-light-white"
                } `}
              >
                <img src={Menu.src} alt="icon" className="w-8" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title.split("/")[0]}
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
