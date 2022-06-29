import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [userAndDate, setUserAndDate] = useState([]);
  const [userName, setUserName] = useState([]);
  const [serviceName, setServiceName] = useState([]);

  const formatDate = (date) => {
    const d = date.split("T")[1];
    return date.replace(d, "").slice(0, -1);
  };

  const sendCertificate = (userId, userName, serviceName) => {
    axios
      .get(
        `http://localhost:8080/admin/dashboard/appliedServices/userDetails/${userId}`
      )
      .then((res) => {
        console.log(userId);
        console.log(res);
        axios
          .post(
            "http://localhost:8080/admin/dashboard/appliedServices/sendCertificate",
            {
              userId: userId,
              name: userName,
              serviceName: serviceName,
              fatherName: res.data.fatherName,
              motherName: res.data.motherName,
              address: res.data.address,
              year: "5",
            }
          )
          .then((re) => {
            alert("Certificate sent successfully");
          })

          .catch((err) => {
            alert("Error in sending certificate");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setApprove = (userId, serviceId, userName, serviceName) => {
    axios
      .post(`http://localhost:8080/admin/dashboard/appliedServices/status`, {
        id: serviceId,
        status: "accepted",
      })
      .then((res) => {
        alert(res.data);
        sendCertificate(userId, userName, serviceName);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const setReject = (id) => {
    axios
      .post(`http://localhost:8080/admin/dashboard/appliedServices/status`, {
        id: id,
        status: "rejected",
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/dashboard/appliedServices`)
      .then((res) => {
        console.log(res.data);
        const serviceData = res.data.doc;
        const tempServiceData = [];
        serviceData.forEach((element) => {
          tempServiceData.push(element);
        });
        setUserAndDate(tempServiceData);

        const userData = res.data.users;
        const tempUserData = [];
        userData.forEach((element) => {
          tempUserData.push(element);
        });
        setUserName(tempUserData);

        const serviceNameData = res.data.services;
        const tempServiceNameData = [];
        serviceNameData.forEach((element) => {
          tempServiceNameData.push(element);
        });
        setServiceName(tempServiceNameData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl text-center">
          <h1 className="font-semibold text-4xl text-gray-700">
            Users Applied for Services
          </h1>
        </div>
        <div className="flex items-center justify-center font-semibold text-xl text-gray-700">
          <h1 className="w-80 pl-5">User ID</h1>
          <h1 className="w-96">User Name</h1>
          <h1 className="w-80">Service Title</h1>
          <h1 className="w-80">Applied On</h1>
          <h1 className="w-40 invisible">Applied On</h1>
        </div>
        <div className="flex flex-col gap-3">
          {userName.map((user, index) =>
            userAndDate.map((items) =>
              user._id === items.user
                ? serviceName.map((service) =>
                    items.service === service._id ? (
                      <div
                        className="flex flex-col px-7 py-2 gap-5 bg-white w-full border border-black"
                        key={index}
                      >
                        <div className="flex items-center justify-center">
                          <div className="flex">
                            <h1 className="font-semibold text-xl w-80">
                              {items.user.toUpperCase()}
                            </h1>
                            <h1 className="font-semibold text-xl w-80">
                              {user.name}
                            </h1>
                            <h1 className="font-semibold text-xl w-80">
                              {service.name}
                            </h1>
                            <h1 className="font-semibold text-xl w-80 pl-16">
                              {formatDate(items.date)}
                            </h1>
                          </div>
                          <div className="flex gap-3">
                            <Link
                              to={`/admin/dashboard/view-docs/${items._id}`}
                            >
                              <button className="bg-pink-500 px-2 rounded text-white">
                                VIEW
                              </button>
                            </Link>
                            <button
                              className="bg-green-500 px-2 rounded text-white"
                              onClick={() =>
                                setApprove(
                                  items.user,
                                  items._id,
                                  user.name,
                                  service.name
                                )
                              }
                            >
                              APPROVE
                            </button>
                            <button
                              className="bg-red-400 px-2 rounded text-white"
                              onClick={() => setReject(items._id)}
                            >
                              REJECT
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )
                : null
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
