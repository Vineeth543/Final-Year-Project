import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const page = useLocation();

  const Complaints = [
    {
      userName: "John Doe",
      subject: "Street Light",
      issue: "Street Light is not working in my area",
      solution: "Repair the street light",
      priority: "High",
      time: "1 day ago",
    },
    {
      userName: "John Doe",
      subject: "Street Light",
      issue: "Street Light is not working in my area",
      solution: "Repair the street light",
      priority: "Average",
      time: "1 day ago",
    },
    {
      userName: "John Doe",
      subject: "Street Light",
      issue: "Street Light is not working in my area",
      solution: "Repair the street light",
      priority: "Critical",
      time: "1 day ago",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
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
            <th className="text-center">User Name</th>
            <th className="text-center">Subject</th>
            <th className="text-center">Issue</th>
            <th className="text-center">Solution</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Status</th>
            <th className="text-center">Time</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {Complaints.map((complaint, index) => (
            <tr className="text-semibold" key={index}>
              <td className="text-center">{complaint.userName}</td>
              <td className="text-center">{complaint.subject}</td>
              <td className="text-center">{complaint.issue}</td>
              <td className="text-center">{complaint.solution}</td>
              <td className="text-center">
                <span
                  className={
                    complaint.priority === "Average"
                      ? "p-2 bg-green-500 rounded text-white"
                      : complaint.priority === "High"
                      ? "p-2 bg-yellow-500 rounded text-white"
                      : "p-2 bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority}
                </span>
              </td>
              <td className="text-center">{complaint.status}</td>
              <td className="text-center">{complaint.time}</td>
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
