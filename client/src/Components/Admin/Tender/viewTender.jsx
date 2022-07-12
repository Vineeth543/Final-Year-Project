import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminViewTender = () => {
  const nav = useNavigate();
  const page = useLocation();
  const TenderID = page.pathname.split("/")[4];
  const [tenderer, setTenderer] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const deleteTender = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/official/tenders/delete/${TenderID}`)
      .then((res) => {
        alert(res.data);
        nav("/admin/tenders");
      })
      .catch((err) => {
        alert(err);
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

  const getTenderDetails = () => {
    axios
      .get(`http://localhost:8080/official/tenders/view/${TenderID}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setStartDate(res.data.startDate);
        setEndDate(res.data.endDate);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getTenderDetails();
    getTendererDetails();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center p-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
        {title}
      </h1>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center w-1/2">CORRIGENDUM</th>
            <th className="text-center">OPENING DATE</th>
            <th className="text-center">CLOSING DATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="w-1/2">{description}</td>
            <td>{startDate.split("T")[0]}</td>
            <td>{endDate.split("T")[0]}</td>
            <td className="m-auto text-white">
              <button
                className="bg-red-500 px-2 py-1 rounded"
                onClick={(e) => deleteTender(e)}
              >
                DELETE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl text-center p-4 rounded bg-sky-800 mx-12 text-white">
          Tenderers Applied for this Tender
        </h1>
        {tenderer.length > 0 ? (
          <table className="content-table dashboard">
            <thead>
              <tr>
                <th className="text-center">Tenderer Name</th>
                <th className="text-center">Contact Person</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Email</th>
                <th className="text-center">Fax</th>
                <th className="text-center">Address</th>
                <th className="text-center">Bid Amount</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tenderer.map((tenderer, index) => (
                <tr className="text-semibold text-center" key={index}>
                  <td>{tenderer.tendererName}</td>
                  <td>{tenderer.contactPerson}</td>
                  <td>{tenderer.phone}</td>
                  <td>{tenderer.email}</td>
                  <td>{tenderer.fax}</td>
                  <td>{tenderer.address}</td>
                  <td>₹ {tenderer.bidAmount}</td>
                  <td>
                    <button className="px-2 py-1 bg-orange-500 rounded text-white">
                      Review
                    </button>
                  </td>
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

export default AdminViewTender;
