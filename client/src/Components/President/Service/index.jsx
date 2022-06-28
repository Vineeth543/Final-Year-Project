import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminServices = () => {
  const [active, setActive] = useState(true);

  const services = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Agriculture.png",
      bgColor: "bg-yellow-400",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Power.png",
      bgColor: "bg-pink-400",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Urban.png",
      bgColor: "bg-teal-400",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      bgColor: "bg-lime-400",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/Job.png",
      bgColor: "bg-cyan-400",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport Services",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/bus.png",
      bgColor: "bg-slate-400",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Medical.png",
      bgColor: "bg-red-400",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Police.png",
      bgColor: "bg-orange-400",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/marriage.png",
      bgColor: "bg-sky-400",
    },
    {
      id: "62b87d07be83ec8f10283777",
      title: "Women and Child Development",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      bgColor: "bg-amber-400",
    },
    {
      id: "62b87c49be83ec8f1028376d",
      title: "Labour Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/labour.png",
      bgColor: "bg-fuchsia-400",
    },
    {
      id: "62b87d21be83ec8f10283779",
      title: "Citizen Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/citizen_new.png",
      bgColor: "bg-green-400",
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
              key={items.title}
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
                {/* <div className="flex gap-3">
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
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminServices;
