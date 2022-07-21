import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Complaints = () => {
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("CCPS-userID");
  const tenderId = useLocation().pathname.split("/")[4];
  const [tenderTitle, setTenderTitle] = useState("");
  const [tendererName, setTendererName] = useState("");
  const [tendererPersonName, setTendererPersonName] = useState("");
  const [tendererEmail, setTendererEmail] = useState("");
  const [tendererMobile, setTendererMobile] = useState("");
  const [tendererFax, setTendererFax] = useState("");
  const [tendererAddress, setTendererAddress] = useState("");
  const [tendererBidAmount, setTendererBidAmount] = useState("");

  const getUsersData = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/details/${userId}`)
        .then((result) => {
          setTendererPersonName(
            result.data.firstName + " " + result.data.lastName
          );
          setTendererMobile(result.data.phone);
          setTendererEmail(result.data.email);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.data);
        });
    } else {
      setLoading(false);
    }
  };

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
    setLoading(true);
    e.preventDefault();
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
        setLoading(false);
      })
      .catch((err) => {
        alert(err.data);
      });
    document.getElementById("tender-apply-form").reset();
  };

  useEffect(() => {
    getUsersData();
    tenderDetails();
  }, []);

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="m-auto my-40"
        />
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center mx-40 rounded p-3 bg-sky-500">
            {tenderTitle}
          </h1>
          <h1 className="font-semibold text-3xl text-center underline">
            TENDER APPLICATION FORM
          </h1>
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
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
                className="text-lg pl-1 border shadow-lg rounded border-slate-300 focus:border-orange-200 focus:outline-none font-normal"
                required
                onChange={(e) => {
                  setTendererBidAmount(e.target.value);
                }}
              />
            </div>
            <button
              className={
                userId
                  ? "m-auto text-lg bg-blue-500 py-1 px-2 rounded-md hover:bg-blue-700 hover:text-white focus:ring ring-blue-400"
                  : "m-auto text-lg bg-blue-500 py-1 px-2 rounded-md cursor-not-allowed"
              }
              type="submit"
              disabled={userId ? false : true}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Complaints;
