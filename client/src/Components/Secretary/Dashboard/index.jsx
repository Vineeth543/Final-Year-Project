import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [userAndDate, setUserAndDate] = useState([]);
  const [userName, setUserName] = useState([]);
  const [serviceName, setServiceName] = useState([]);

  const loadUserApplications = () => {
    axios
      .get(`http://localhost:8080/secretary/dashboard/appliedServices`)
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
  };

  const formatDate = (date) => {
    const d = date.split("T")[1];
    return date.replace(d, "").slice(0, -1);
  };

  const setApprove = (id) => {
    axios
      .post(
        `http://localhost:8080/secretary/dashboard/appliedServices/status/`,
        { id: id, status: "accepted" }
      )
      .then((res) => {
        alert(res.data);
        loadUserApplications();
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const setReject = (id) => {
    axios
      .post(
        `http://localhost:8080/secretary/dashboard/appliedServices/status/`,
        { id: id, status: "rejected" }
      )
      .then((res) => {
        alert(res.data);
        loadUserApplications();
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    loadUserApplications();
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
                        key={items.title}
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
                            <button className="bg-pink-500 px-2 rounded text-white">
                              VIEW
                            </button>
                            <button
                              className="bg-green-500 px-2 rounded text-white"
                              onClick={() => setApprove(items._id)}
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
