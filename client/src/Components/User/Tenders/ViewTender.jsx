import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const page = useLocation();
  const TenderID = page.pathname.split("/")[4];
  const [tenderer, setTenderer] = useState([]);
  const [tenderTitle, setTenderTitle] = useState("");

  const gettenderDetails = () => {
    axios
      .get(`http://localhost:8080/official/tenders/view/${TenderID}`)
      .then((res) => {
        setTenderTitle(res.data.title);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const getTendererDetails = () => {
    axios
      .get(`http://localhost:8080/user/tenders/apply/view/${TenderID}`)
      .then((res) => {
        setTenderer(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    gettenderDetails();
    getTendererDetails();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center underline">
        Tenderers Applied
      </h1>
      <h1 className="font-bold text-4xl text-center">{tenderTitle}</h1>
      <div className="flex items-center justify-center w-full">
        {tenderer.length > 0 ? (
          <table className="content-table dashboard w-full">
            <thead>
              <tr>
                <th className="text-center">Tenderer Name</th>
                <th className="text-center">Contact Person</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Email</th>
                <th className="text-center">Fax</th>
                <th className="text-center">Address</th>
                <th className="text-center">Bid Amount</th>
              </tr>
            </thead>
            <tbody>
              {tenderer.map((tenderer, index) => (
                <tr className="text-semibold text-center" key={index}>
                  <td>{tenderer.tendererName}</td>
                  <td>{tenderer.contactPerson}</td>
                  <td>
                    {tenderer.phone.slice(0, 2) +
                      "*".repeat(6) +
                      tenderer.phone.slice(8, 10)}
                  </td>
                  <td>
                    {tenderer.email[0] +
                      "*".repeat(
                        tenderer.email.slice(0, tenderer.email.indexOf("@"))
                          .length - 1
                      ) +
                      tenderer.email.slice(tenderer.email.indexOf("@"))}
                  </td>
                  <td>
                    {tenderer.fax.slice(0, 2) +
                      "*".repeat(6) +
                      tenderer.fax.slice(8, 10)}
                  </td>
                  <td>{tenderer.address}</td>
                  <td>*****</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="font-bold text-4xl text-center my-20">
            No Tenderer Applied for this Tender. ☹️
          </h1>
        )}
      </div>
    </>
  );
};

export default SingleService;
