import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Complaints = () => {
  const location = useLocation();
  const tenderId = location.pathname.split("/")[4];
  const [tenderTitle, setTenderTitle] = useState("");
  const [tendererName, setTendererName] = useState("");
  const [tendererPersonName, setTendererPersonName] = useState("");
  const [tendererEmail, setTendererEmail] = useState("");
  const [tendererMobile, setTendererMobile] = useState("");
  const [tendererFax, setTendererFax] = useState("");
  const [tendererAddress, setTendererAddress] = useState("");
  const [tendererBidAmount, setTendererBidAmount] = useState("");

  const getUsersData = () => {
    const userId = localStorage.getItem("CCPS-userID");
    axios
      .get(`http://localhost:8080/user/details/${userId}`)
      .then((result) => {
        if (result.data.firstName) {
          setTendererPersonName(
            result.data.firstName + " " + result.data.lastName
          );
          setTendererMobile(result.data.phone);
          setTendererEmail(result.data.email);
        }
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const tenderDetails = () => {
    axios
      .get(`http://localhost:8080/official/tenders/view/${tenderId}`)
      .then((res) => {
        setTenderTitle(res.data.title);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const applyForTender = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("CCPS-userID");
    axios
      .post("http://localhost:8080/user/tenders/apply", {
        user: userId,
        tender: tenderId,
        tendererName: tendererName,
        contactPerson: tendererPersonName,
        phone: tendererMobile,
        email: tendererEmail,
        fax: tendererFax,
        address: tendererAddress,
        bidAmount: tendererBidAmount,
      })
      .then((res) => {
        alert(res.data);
        document.getElementById("tender-apply-form").reset();
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    tenderDetails();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center underline">
        Tender Application
      </h1>
      <h1 className="font-bold text-4xl text-center">{tenderTitle}</h1>
      <form
        id="tender-apply-form"
        className="flex flex-col m-auto gap-10 font-semibold text-2xl"
        onSubmit={(e) => applyForTender(e)}
      >
        <div className="flex justify-between gap-20">
          <label htmlFor="tendererName">Company Name :</label>
          <input
            type="text"
            name="tendererName"
            id="tendererName"
            placeholder="Tenderer Name"
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none"
            required
            onChange={(e) => {
              setTendererName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fullname">Person Name :</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            defaultValue={tendererPersonName}
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none"
            required
            onChange={(e) => {
              setTendererPersonName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="mobile">Mobile No :</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Mobile No"
            defaultValue={tendererMobile}
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none"
            required
            onChange={(e) => {
              setTendererMobile(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            defaultValue={tendererEmail}
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none"
            required
            onChange={(e) => {
              setTendererEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fax">Fax :</label>
          <input
            type="number"
            name="fax"
            id="fax"
            placeholder="Fax No"
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200  focus:outline-none"
            required
            onChange={(e) => {
              setTendererFax(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="address">Address :</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200  focus:outline-none"
            required
            onChange={(e) => {
              setTendererAddress(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="bidAmount">Bid Amount :</label>
          <input
            type="number"
            name="bidAmount"
            id="bidAmount"
            placeholder="Bid Amount"
            className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none"
            required
            onChange={(e) => {
              setTendererBidAmount(e.target.value);
            }}
          />
        </div>
        <button
          className={
            localStorage.getItem("CCPS-userID")
              ? "m-auto text-lg bg-blue-500 py-1 px-2 rounded-md hover:bg-blue-700 hover:text-white focus:ring ring-blue-400"
              : "m-auto text-lg bg-blue-500 py-1 px-2 rounded-md cursor-not-allowed"
          }
          type="submit"
          disabled={localStorage.getItem("CCPS-userID") ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Complaints;
