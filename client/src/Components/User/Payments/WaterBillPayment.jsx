import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import PaymentModal from "../PaymentModal/Payment";
import axios from "axios";

const WaterBillPayment = () => {
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("CCPS-userID");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rationCard, setRationCard] = useState("");
  const [waterBillData, setWaterBillData] = useState(false);
  const [waterBill, setWaterBill] = useState(0);

  const getUsersData = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/details/${userId}`)
        .then((result) => {
          setName(result.data.firstName + " " + result.data.lastName);
          setPhone(result.data.phone);
          setEmail(result.data.email);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.data);
        });
    } else {
      setLoading(false);
    }
  };

  const getWaterBillData = (e) => {
    setLoading(true);
    e.preventDefault();
    if (rationCard.length !== 10) {
      alert("Please enter valid Ration Card Number");
      return;
    }
    setWaterBillData(true);
    setLoading(false);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const payWaterBill = () => {
    setIsOpen(true);
    setWaterBill(450);
  };

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <PaymentModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            waterBill={waterBill}
          />
          <h1 className="w-full p-5 bg-blue-900 text-center text-white text-4xl font-bold">
            Water Bill Payment
          </h1>
          <div className="flex items-center justify-evenly bg-gray-200 py-20">
            <form
              className="flex w-[30rem] flex-col gap-10 font-semibold text-2xl"
              onSubmit={(e) => getWaterBillData(e)}
            >
              <div className="flex items-center justify-between">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={name}
                  id="fullName"
                  placeholder="Full Name"
                  className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1 font-normal text-xl"
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
                  className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1 font-normal text-xl"
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
                  className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1 font-normal text-xl"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between gap-10">
                <label htmlFor="rationCard">Ration Card No</label>
                <input
                  type="number"
                  name="rationCard"
                  id="rationCard"
                  placeholder="10 Digit Ration Card No"
                  className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1 font-normal text-xl"
                  required
                  onChange={(e) => setRationCard(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className={
                  userId && !waterBillData
                    ? "m-auto font-semibold bg-blue-500 p-2 rounded text-white hover:bg-blue-900 focus:ring ring-blue-500"
                    : "m-auto font-semibold bg-blue-500 p-2 rounded text-white cursor-not-allowed"
                }
                disabled={userId && !waterBillData ? false : true}
              >
                Get Bill
              </button>
            </form>
            <div className="flex w-[30rem] flex-col items-center gap-10 font-semibold text-2xl rounded-3xl">
              {waterBillData && (
                <>
                  <h1>Your Water Bill for This month is:</h1>
                  <h2>Rs. 450</h2>
                  <button
                    onClick={payWaterBill}
                    className="font-semibold bg-blue-500 p-2 rounded text-white hover:bg-blue-900 focus:ring ring-blue-500"
                  >
                    Pay Bill
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WaterBillPayment;
