import React, { useState, useEffect } from "react";
import axios from "axios";

const UserHomePageComplaints = () => {
  const [newComplaints, setNewComplaints] = useState([]);
  const [processingComplaints, setProcessingComplaints] = useState([]);
  const [solvedComplaints, setSolvedComplaints] = useState([]);
  const [rejectedComplaints, setRejectedComplaints] = useState([]);

  const getComplaintsData = (status) => {
    axios
      .get(`http://localhost:8080/official/complaints/${status}`)
      .then((res) => {
        if (status === "new") setNewComplaints(res.data);
        else if (status === "processing") setProcessingComplaints(res.data);
        else if (status === "resolved") setSolvedComplaints(res.data);
        else if (status === "rejected") setRejectedComplaints(res.data);
      })
      .catch((err) => {
        alert("Error in fetching complaints");
      });
  };

  useEffect(() => {
    getComplaintsData("new");
    getComplaintsData("processing");
    getComplaintsData("resolved");
    getComplaintsData("rejected");
  }, []);

  return (
    <>
      <div className="flex flex-col border border-black rounded p-8 mx-44 gap-8">
        <h1 className="text-4xl text-center text-red-500 font-bold">
          Public Complaints
        </h1>
        {newComplaints.map((complaint, index) => (
          <div
            className="flex bg-gray-100 p-5 border border-gray-200 gap-3 hover:shadow-lg relative"
            key={index}
          >
            <div className="flex flex-col w-[60%] gap-5">
              <h2 className="font-bold text-2xl pl-6">
                {complaint.description.split("\n")[0]}
              </h2>
              <h2 className="font-semibold text-xl">
                Raised By: {complaint.name}
              </h2>
              <p className="font-medium ">
                {complaint.description.slice("\n")}
              </p>
              <h2 className="font-semibold text-lg">
                Date: {complaint.createdAt.split("T")[0]}
              </h2>
              <h2 className="font-semibold text-lg">
                Priority:{" "}
                <span
                  className={
                    complaint.priority === "normal"
                      ? "w-20 px-1 m-auto bg-green-500 rounded text-white"
                      : complaint.priority === "average"
                      ? "w-20 px-1 m-auto bg-yellow-500 rounded text-white"
                      : "w-20 px-1 m-auto bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority[0].toUpperCase() +
                    complaint.priority.slice(1)}
                </span>
              </h2>
              <h2 className="font-semibold text-xl">
                Authority Response: {complaint.remarks}
              </h2>
            </div>
            <div className="flex w-[40%]">
              <img
                src={complaint.image}
                alt="complaint"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="w-[100px] -rotate-45 font-semibold text-lg text-center bg-blue-500 text-white px-1 absolute -left-6 top-3">
              {complaint.status[0].toUpperCase() + complaint.status.slice(1)}
            </h2>
          </div>
        ))}
        {processingComplaints.map((complaint, index) => (
          <div
            className="flex bg-gray-100 p-5 border border-gray-200 gap-3 hover:shadow-lg relative"
            key={index}
          >
            <div className="flex flex-col w-[60%] gap-5">
              <h2 className="font-bold text-2xl pl-6">
                {complaint.description.split("\n")[0]}
              </h2>
              <h2 className="font-semibold text-xl">
                Raised By: {complaint.name}
              </h2>
              <p className="font-medium ">
                {complaint.description.slice("\n")}
              </p>
              <h2 className="font-semibold text-lg">
                Date: {complaint.createdAt.split("T")[0]}
              </h2>
              <h2 className="font-semibold text-lg">
                Priority:{" "}
                <span
                  className={
                    complaint.priority === "normal"
                      ? "w-20 px-1 m-auto bg-green-500 rounded text-white"
                      : complaint.priority === "average"
                      ? "w-20 px-1 m-auto bg-yellow-500 rounded text-white"
                      : "w-20 px-1 m-auto bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority[0].toUpperCase() +
                    complaint.priority.slice(1)}
                </span>
              </h2>
              <h2 className="font-semibold text-xl">
                Authority Response: {complaint.remarks}
              </h2>
            </div>
            <div className="flex w-[40%]">
              <img
                src={complaint.image}
                alt="complaint"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="w-[100px] -rotate-45 font-semibold text-lg text-center bg-yellow-500 text-white px-1 absolute -left-6 top-3">
              {complaint.status[0].toUpperCase() + complaint.status.slice(1)}
            </h2>
          </div>
        ))}
        {solvedComplaints.map((complaint, index) => (
          <div
            className="flex bg-gray-100 p-5 border border-gray-200 gap-3 hover:shadow-lg relative"
            key={index}
          >
            <div className="flex flex-col w-[60%] gap-5">
              <h2 className="font-bold text-2xl pl-6">
                {complaint.description.split("\n")[0]}
              </h2>
              <h2 className="font-semibold text-xl">
                Raised By: {complaint.name}
              </h2>
              <p className="font-medium ">
                {complaint.description.slice("\n")}
              </p>
              <h2 className="font-semibold text-lg">
                Date: {complaint.createdAt.split("T")[0]}
              </h2>
              <h2 className="font-semibold text-lg">
                Priority:{" "}
                <span
                  className={
                    complaint.priority === "normal"
                      ? "w-20 px-1 m-auto bg-green-500 rounded text-white"
                      : complaint.priority === "average"
                      ? "w-20 px-1 m-auto bg-yellow-500 rounded text-white"
                      : "w-20 px-1 m-auto bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority[0].toUpperCase() +
                    complaint.priority.slice(1)}
                </span>
              </h2>
              <h2 className="font-semibold text-xl">
                Authority Response: {complaint.remarks}
              </h2>
            </div>
            <div className="flex w-[40%]">
              <img
                src={complaint.image}
                alt="complaint"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="w-[100px] -rotate-45 font-semibold text-lg text-center bg-green-500 text-white px-1 absolute -left-6 top-3">
              {complaint.status[0].toUpperCase() + complaint.status.slice(1)}
            </h2>
          </div>
        ))}
        {rejectedComplaints.map((complaint, index) => (
          <div
            className="flex bg-gray-100 p-5 border border-gray-200 gap-3 hover:shadow-lg relative"
            key={index}
          >
            <div className="flex flex-col w-[60%] gap-5">
              <h2 className="font-bold text-2xl pl-6">
                {complaint.description.split("\n")[0]}
              </h2>
              <h2 className="font-semibold text-xl">
                Raised By: {complaint.name}
              </h2>
              <p className="font-medium ">
                {complaint.description.slice("\n")}
              </p>
              <h2 className="font-semibold text-lg">
                Date: {complaint.createdAt.split("T")[0]}
              </h2>
              <h2 className="font-semibold text-lg">
                Priority:{" "}
                <span
                  className={
                    complaint.priority === "normal"
                      ? "w-20 px-1 m-auto bg-green-500 rounded text-white"
                      : complaint.priority === "average"
                      ? "w-20 px-1 m-auto bg-yellow-500 rounded text-white"
                      : "w-20 px-1 m-auto bg-red-500 rounded text-white"
                  }
                >
                  {complaint.priority[0].toUpperCase() +
                    complaint.priority.slice(1)}
                </span>
              </h2>
              <h2 className="font-semibold text-xl">
                Authority Response: {complaint.remarks}
              </h2>
            </div>
            <div className="flex w-[40%]">
              <img
                src={complaint.image}
                alt="complaint"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="w-[100px] -rotate-45 font-semibold text-lg text-center bg-red-500 text-white px-1 absolute -left-6 top-3">
              {complaint.status[0].toUpperCase() + complaint.status.slice(1)}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserHomePageComplaints;
