import React, { useState, useEffect } from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const Tenders = () => {
  const [tenderDetails, setTenders] = useState([]);

  const getTenders = () => {
    axios
      .get("http://localhost:8080/official/tenders/view")
      .then((res) => {
        const Tenders = res.data;
        const tempTenders = [];
        Tenders.forEach((element) => {
          tempTenders.push(element);
        });
        setTenders(tempTenders);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getTenders();
  }, []);

  const links = [
    "Bid Document",
    "Request for Proposal",
    "Corrigendum 1",
    "Declaration of Results",
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-center mt-10">e-Tenders</h1>
      {tenderDetails.map((tender, index) => (
        <div
          className="flex flex-col bg-white m-auto my-10 hover:shadow-2xl rounded-xl border"
          style={{ width: "70rem" }}
          key={index}
        >
          <div className="flex items-center border-b justify-between gap-5 w-full rounded-t-xl">
            <p className="bg-green-400 text-white p-6 text-lg font-medium rounded-tl-xl">
              {index + 1}
            </p>
            <h1 className="text-xl font-semibold">{tender.title}</h1>
            <div className="flex flex-col text-lg font-medium border-l items-center justify-center py-2 px-4">
              <p>Tender Reference No:</p>
              <p>{tender._id}</p>
            </div>
          </div>
          <div className="text-center grid grid-cols-2 divide-x border-b w-full">
            <div className="py-4 bg-blue-100 text-blue-500 text-lg font-medium">
              Bid Opening Date:{" "}
              <span className="text-blue-700">
                {tender.startDate.split("T")[0]}
              </span>
            </div>
            <div className="py-4 bg-purple-100 text-purple-500 text-lg font-medium">
              Bid Closing date:{" "}
              <span className="text-purple-700">
                {tender.endDate.split("T")[0]}
              </span>
            </div>
          </div>
          <h3 className="p-4 text-lg font-base border-b">
            {tender.description}
          </h3>
          <div className="flex flex-col p-4 text-md font-base gap-2 pb-10">
            <p className="text-lg font-semibold">Links:</p>
            {links.map((link, index) => (
              <div
                className="flex items-center text-red-600 gap-2 font-medium cursor-pointer w-fit hover:text-red-800"
                key={index}
              >
                <CgEditBlackPoint />
                {link}
              </div>
            ))}
            <div className="flex">
              <Link
                to={`/user/tenders/view/${tender._id}`}
                className="w-fit m-auto px-2 py-1 bg-green-500 rounded font-semibold text-lg text-white hover:bg-green-600 focus:ring ring-green-300"
              >
                View
              </Link>
              <Link
                to={`/user/tenders/apply/${tender._id}`}
                className="w-fit m-auto px-2 py-1 bg-red-500 rounded font-semibold text-lg text-white hover:bg-red-600 focus:ring ring-red-300"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tenders;
