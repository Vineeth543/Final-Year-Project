import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminServices = () => {
  const [active, setActive] = useState(true);

  const services = [
    {
      key: 1,
      title: "Farmer Welfare",
    },
    {
      key: 2,
      title: "Electricity and Municipal Services",
    },
    {
      key: 3,
      title: "Housing related services",
    },
    {
      key: 4,
      title: "Student educational services",
    },
    {
      key: 5,
      title: "Employement and Training",
    },
    {
      key: 6,
      title: "Driving and Transport Services",
    },
    {
      key: 7,
      title: "Health and Drug related Services",
    },
    {
      key: 8,
      title: "Police and Security Services",
    },
    {
      key: 9,
      title: "Birth, Death & Marriage related Services",
    },
    {
      key: 10,
      title: "Women and Child Development",
    },
    {
      key: 11,
      title: "Labour Welfare",
    },
    {
      key: 12,
      title: "Citizen Services",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-bold text-2xl">Services</h1>
          <Link
            className="flex text-xl underline"
            to="/admin/services/add-service"
          >
            Add Services
          </Link>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80">Sl.No</h1>
          <h1 className="font-semibold text-xl">Services</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {services.map((items) => (
            <div className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2">
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{items.key}</h1>
                  <button className="font-semibold text-xl">{items.title}</button>
                </div>
                <div className="flex gap-3">
                  <button className="bg-pink-500 px-2 rounded text-white">
                    VIEW
                  </button>
                  <button
                    className={`bg-green-500 px-2 rounded text-white ${
                      !active && "bg-gray-500"
                    } `}
                    onClick={() => setActive(!active)}
                  >
                    {`${active ? "ACTIVE" : "DEACTIVE"} `}
                  </button>
                  <button className="bg-blue-500 px-2 rounded text-white">
                    EDIT
                  </button>
                  <button className="bg-red-500 px-2 rounded text-white">
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminServices;
