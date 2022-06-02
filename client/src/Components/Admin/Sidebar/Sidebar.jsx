import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const [Menus] = useState([
    {
      title: "Dashboard",
      src: "https://cdn-icons.flaticon.com/png/512/1991/premium/1991103.png?token=exp=1654179628~hmac=ecd23e848cf6c7b3ec75a9f817fca2d1",
    },
    {
      title: "Services",
      src: "https://cdn-icons.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1654179221~hmac=e5d48204bf36f4104f2cb6871ac1978b",
    },
    {
      title: "Schemes",
      src: "https://cdn-icons.flaticon.com/png/512/1597/premium/1597725.png?token=exp=1654179510~hmac=78235abb326379981f03575d0dbeb7f4",
    },
    {
      title: "Events",
      src: "https://cdn-icons.flaticon.com/png/512/3277/premium/3277487.png?token=exp=1654179533~hmac=b3dff5e3d6c63a51c66d0ba20099207a",
    },
    {
      title: "Tenders",
      src: "https://cdn-icons.flaticon.com/png/512/5165/premium/5165921.png?token=exp=1654179565~hmac=2a6c36be158c4df4a4b18ec3cc57036c",
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
        } bg-white h-screen py-5 relative duration-300`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2879/2879593.png"
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex bg-white gap-x-4 items-center">
          <img
            src="https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png"
            alt=""
            className={`w-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Welcome Admin
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
                className={`flex p-2 pl-5 mt-4 cursor-pointer hover:text-white text-black text-lg font-semibold items-center justify- gap-x-4 ${
                  page.pathname === `/admin/${Menu.title.toLowerCase()}` &&
                  "bg-light-white"
                } `}
              >
                <img src={Menu.src} alt="" className="w-8" />
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
