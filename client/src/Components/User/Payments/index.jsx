import React from "react";
import { Link } from "react-router-dom";

export const Payments = () => {
  return (
    <>
      <h1 className="w-full p-5 bg-blue-900 text-center text-white text-4xl font-bold">
        Utility Bill Payment
      </h1>
      <div className="flex items-center justify-evenly p-10 bg-gray-200">
        <div className="w-96 h-84 hover:shadow-2xl">
          <h1 className="bg-blue-900 p-3 w-full text-white text-xl text-center font-semibold rounded-t-lg">
            Water Bill Payment
          </h1>
          <h2 className="bg-gray-300 p-2 w-full text-blue-900 text-md font-medium">
            Public Health Engineering
          </h2>
          <p className="bg-white px-2 pt-2 text-md font-base">
            Use this service to pay your water bill online through e-mitra.
          </p>
          <div className="flex bg-white items-center h-44 rounded-b-lg">
            <img
              src="https://m.media-amazon.com/images/I/41+gO0x771L._SL1000_.jpg"
              alt="water"
              className="w-64 object-cover rounded-bl-lg"
            />
            <Link
              to={"waterbill"}
              className="font-semibold bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white focus:ring ring-blue-500"
            >
              Pay Bill
            </Link>
          </div>
        </div>
        <div className="w-96 h-84 hover:shadow-2xl">
          <h1 className="bg-blue-900 p-3 w-full text-white text-xl text-center font-semibold rounded-t-lg">
            House Tax Payment
          </h1>
          <h2 className="bg-gray-300 p-2 w-full text-blue-900 text-md font-medium">
            Panchayat Management
          </h2>
          <p className="bg-white px-2 pt-2 text-md font-base">
            Use this service to pay your house tax online through e-mitra.
          </p>
          <div className="flex bg-white items-center justify-center gap-16 h-44 rounded-b-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjy05JGti9TAGEXE24d0ff-S9Dcg2tXo7jZd1gMLwslVmqjvIUeIXkbN1sr_0u2_kFeGo&usqp=CAU"
              alt="water"
              className="w-28 object-cover rounded-bl-lg"
            />
            <Link
              to={"houseTax"}
              className="font-semibold bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white focus:ring ring-blue-500"
            >
              Pay Tax
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
