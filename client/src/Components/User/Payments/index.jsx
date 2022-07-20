import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PaymentModal from "../PaymentModal/Payment";

export const Payments = () => {
  const location = useLocation().pathname.split("/")[3];
  console.log(location);
  const [isOpen, setIsOpen] = useState(false);
  const [waterBill, setWaterBill] = useState(0);
  const [homeTax, setHomeTax] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rationCard, setRationCard] = useState("");
  const [waterBillData, setWaterBillData] = useState("");

  const payWaterBill = () => {
    setIsOpen(true);
    setWaterBill(450);
  };

  const payHomeTax = () => {
    setIsOpen(true);
    setHomeTax(400);
  };

  const WaterPaymentData = () => {
    return (
      <>
        <div className="flex items-center justify-evenly p-10 bg-gray-200">
          <form
            className="flex flex-col w-1/2"
            onSubmit={(e) => setWaterBillData(e)}
          >
            <div className="flex items-center justify-between">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                defaultValue={name}
                id="fullName"
                placeholder="Full Name"
                className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="phone">Phone</label>
              <input
                type="nuber"
                name="phone"
                defaultValue={phone}
                id="phone"
                placeholder="Phone Number"
                className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                id="email"
                placeholder="Email"
                className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="rationCard">Ration Card</label>
              <input
                type="number"
                name="rationCard"
                id="rationCard"
                placeholder="Ration Card"
                className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
                required
                onChange={(e) => setRationCard(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className={
                localStorage.getItem("CCPS-userID")
                  ? "m-auto bg-blue-500 py-1 px-2 rounded hover:bg-blue-700 text-lg hover:text-white focus:ring ring-blue-400"
                  : "m-auto bg-blue-500 py-1 px-2 rounded text-lg cursor-not-allowed"
              }
              disabled={localStorage.getItem("CCPS-userID") ? false : true}
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col w-1/2">
            {waterBillData !== "" ? (
              <>
                <h1>Your Water Bill for July is:</h1>
                <h2>Rs. 450</h2>
                <button
                  onClick={payWaterBill}
                  className="font-semibold bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white focus:ring ring-blue-500"
                >
                  Pay Bill
                </button>
              </>
            ) : null}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <PaymentModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        waterBill={waterBill}
        homeTax={homeTax}
      />
      <h1 className="w-full p-5 bg-blue-900 text-center text-white text-4xl font-bold">
        Utility Bill Payment
      </h1>
      {location === "water" ? (
        WaterPaymentData()
      ) : (
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
                to={"water"}
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
              <button
                onClick={payHomeTax}
                className="font-semibold bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white focus:ring ring-blue-500"
              >
                Pay Tax
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payments;
