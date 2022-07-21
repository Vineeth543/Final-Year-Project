import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const Tenders = () => {
  const [loading, setLoading] = useState(true);
  const [tenderDetails, setTenders] = useState([]);

  const getTenders = () => {
    axios
      .get("http://localhost:8080/official/tenders/view")
      .then((res) => {
        setTenders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getTenders();
  }, []);

  const links = [
    {
      doc: "Bid Document",
      link: "https://kbjnl.karnataka.gov.in/storage/pdf-files/Tender_document_Oct2013.pdf",
    },
    {
      doc: "Declaration of Results",
      link: "https://kbjnl.karnataka.gov.in/storage/pdf-files/Tender_document_Oct2013.pdf",
    },
  ];

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
          <h1 className="font-bold text-4xl text-center">e-Tenders</h1>
          {tenderDetails.length > 0 ? (
            tenderDetails.map((tender, index) => (
              <div
                className="flex flex-col bg-white m-auto hover:shadow-2xl rounded-xl border"
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
                    <a
                      className="flex items-center text-red-600 gap-2 font-medium cursor-pointer w-fit hover:text-red-800"
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CgEditBlackPoint />
                      {link.doc}
                    </a>
                  ))}
                  {tender.status === "active" ? (
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
                  ) : (
                    <h2 className="text-center text-red-500 font-bold text-3xl">
                      This Tender is Inactive.
                    </h2>
                  )}
                </div>
              </div>
            ))
          ) : (
            <h1 className="font-bold text-4xl text-center my-40">
              Currently No Tender Available. ☹️
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default Tenders;
