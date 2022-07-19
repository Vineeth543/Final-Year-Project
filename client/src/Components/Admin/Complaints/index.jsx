import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminComplaints = () => {
  const [status] = useState([
    "All",
    "New",
    "Processing",
    "OnHold",
    "Solved",
    "Rejected",
    "Spam",
  ]);
  const [complaints, setComplaints] = useState([]);

  const page = useLocation();

  const getComplaintsData = (e) => {
    axios
      .get(`http://localhost:8080/official/complaints`)
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((err) => {
        alert("Error in fetching complaints");
      });
  };

  useEffect(() => {
    getComplaintsData();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
        User Complaints List
      </h1>
      <div className="flex bg-sky-500 gap-16 p-2 font-bold text-2xl shadow-md shadow-sky-400 mx-12 rounded">
        {status.map((item, index) => (
          <Link to={`/admin/complaints/${item.toLowerCase()}`} key={index}>
            <h3
              className={`cursor-pointer p-2 rounded ${
                page.pathname.includes(
                  "/admin/complaints/" + item.toLowerCase()
                ) && "bg-black text-white"
              } `}
            >
              {item}
            </h3>
          </Link>
        ))}
      </div>
      <table className="content-table dashboard complaints">
        <thead>
          <tr>
            <th className="text-center">Raised By</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Issue</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Status</th>
            <th className="text-center">Date</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr className="text-semibold" key={index}>
              <td className="text-center">{complaint.name}</td>
              <td className="text-center">{complaint.email}</td>
              <td className="text-center">{complaint.phone}</td>
              <td className="text-center">{complaint.description}</td>
              <td className="text-center">
                <span
                  className={
                    complaint.priority === "Normal"
                      ? "p-2 bg-green-500 rounded text-white"
                      : complaint.priority === "Average"
                      ? "p-2 bg-yellow-500 rounded text-white"
                      : "p-2 bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority}
                </span>
              </td>
              <td className="text-center">{complaint.status}</td>
              <td className="text-center">
                {complaint.createdAt.split("T")[0]}
              </td>
              <td className="text-center">
                <button className="px-2 py-1 bg-orange-500 rounded">
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminComplaints;
