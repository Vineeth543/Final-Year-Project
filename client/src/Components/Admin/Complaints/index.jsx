import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const url = useLocation().pathname;
  const status = ["New", "Processing", "Solved", "Rejected"];

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

  const sendResponse = (e, id) => {
    e.preventDefault();
    const response = window.prompt("Enter response");
    if (response) {
      const data = {
        id: id,
        response: response,
      };
      axios
        .post(`http://localhost:8080/official/complaints/response`, data)
        .then((res) => {
          alert("Response sent successfully.");
        })
        .catch((err) => {
          alert("Error in sending response.");
        });
    }
  };

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
                url.includes("/admin/complaints/" + item.toLowerCase()) &&
                "bg-black text-white"
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
                <div className="dropdown">
                  <h2
                    className={
                      complaint.priority === "Normal"
                        ? "w-20 py-1 m-auto bg-green-500 rounded text-white"
                        : complaint.priority === "Average"
                        ? "w-20 py-1 m-auto bg-yellow-500 rounded text-white"
                        : "w-20 py-1 m-auto bg-red-500 rounded text-white"
                    }
                  >
                    {complaint.priority}
                  </h2>
                  <div className="dropdown-content rounded">
                    {complaint.priority === "Normal" && (
                      <>
                        <h2 className="bg-yellow-500 cursor-pointer">
                          Average
                        </h2>
                        <h2 className="bg-red-500 cursor-pointer">High</h2>
                      </>
                    )}
                    {complaint.priority === "Average" && (
                      <>
                        <h2 className="bg-green-500 cursor-pointer">Normal</h2>
                        <h2 className="bg-red-500 cursor-pointer">High</h2>
                      </>
                    )}
                    {complaint.priority === "High" && (
                      <>
                        <h2 className="bg-green-500 cursor-pointer">Normal</h2>
                        <h2 className="bg-yellow-500 cursor-pointer">
                          Average
                        </h2>
                      </>
                    )}
                  </div>
                </div>
              </td>
              <td className="text-center">
                <div className="dropdown">
                  <h2
                    className={
                      complaint.status === "Solved"
                        ? "w-20 py-1 m-auto bg-green-500 rounded text-white"
                        : complaint.status === "Processing"
                        ? "w-20 py-1 m-auto bg-yellow-500 rounded text-white"
                        : complaint.status === "Rejected"
                        ? "w-20 py-1 m-auto bg-red-500 rounded text-white"
                        : "w-20 py-1 m-auto bg-blue-500 rounded text-white"
                    }
                  >
                    {complaint.status}
                  </h2>
                  <div className="dropdown-content">
                    <h2 className="bg-yellow-500 cursor-pointer">Processing</h2>
                    <h2 className="bg-green-500 cursor-pointer">Solved</h2>
                    <h2 className="bg-red-500 cursor-pointer">Rejected</h2>
                  </div>
                </div>
              </td>
              <td className="text-center">
                {complaint.createdAt.split("T")[0]}
              </td>
              <td className="text-center">
                <button
                  className="px-2 py-1 bg-orange-500 rounded"
                  type="submit"
                  onClick={(e) => sendResponse(e, complaint._id)}
                >
                  {complaint.remarks === "NA"
                    ? "Respond"
                    : "Responded"}
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
