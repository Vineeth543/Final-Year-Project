import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminDashboard = () => {
  const [active, setActive] = useState(true);

  const Schemes = [
    {
      key: 1,
      title: "Schemes for Child Welfare",
      image:
        "https://i.pinimg.com/474x/e9/81/23/e98123b06efb1f1f144d8b86867c2031.jpg",
      borderColor: "border-yellow-400",
    },
    {
      key: 2,
      title: "Schemes for Unemployed and Poor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0WJW7UZ8aaEDzk9Bpmmm9q7UuKUjd5uyswPxtzBwYfLEDExJBvBFunKjMTaByKcpMFU&usqp=CAU",
      borderColor: "border-pink-400",
    },
    {
      key: 3,
      title: "Schemes for Academicians",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      borderColor: "border-teal-400",
    },
    {
      key: 4,
      title: "Aatma Nirbhar Bharat Abhiyaan",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c98c7424d546e5350d2cf32/1594215914941-ZM8FLLGF30XQ5ZZOURHE/Atmanirbhar%2Bbharat%2Babhiyaan+%281%29.png?format=1500w",
      borderColor: "border-lime-400",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-semibold text-4xl text-gray-700">Schemes</h1>
          <Link
            className="flex w-48 outline-none"
            to="/secretary/schemes/add-scheme"
          >
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-cyan-500" />
            <h2 className="p-2 text-xl font-semibold text-white bg-cyan-500">
              New Scheme
            </h2>
          </Link>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80 text-gray-700">Sl.No</h1>
          <h1 className="font-semibold text-xl text-gray-700">Schemes</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {Schemes.map((items) => (
            <div
              className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2"
              key={items.title}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{items.key}</h1>
                  <button className="font-semibold text-xl">
                    {items.title}
                  </button>
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

export default AdminDashboard;
