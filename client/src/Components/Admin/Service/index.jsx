import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminServices = () => {
  const services = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity Services",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related services",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational services",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport Services",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related Services",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security Services",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related Services",
    },
    {
      id: "62b87d07be83ec8f10283777",
      title: "Women and Child Development",
    },
    {
      id: "62b87c49be83ec8f1028376d",
      title: "Labour Welfare",
    },
    {
      id: "62b87d21be83ec8f10283779",
      title: "Citizen Services",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-semibold text-4xl text-gray-700">Services</h1>
          <Link
            className="flex w-44 outline-none"
            to="/admin/services/add-service"
          >
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-cyan-500" />
            <h2 className="p-2 text-xl font-semibold text-white bg-cyan-500">
              New Service
            </h2>
          </Link>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80 text-gray-700">Sl.No</h1>
          <h1 className="font-semibold text-xl text-gray-700">Services</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {services.map((items, index) => (
            <div
              className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{index + 1}</h1>
                  <Link to={`/admin/services/view/${items.id}`}>
                    <h1 className="font-semibold text-xl cursor-pointer">
                      {items.title}
                    </h1>
                  </Link>
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
