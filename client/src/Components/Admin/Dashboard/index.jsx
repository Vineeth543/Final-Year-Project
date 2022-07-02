import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [userAndDate, setUserAndDate] = useState([]);
  const [userName, setUserName] = useState([]);
  const [serviceName, setServiceName] = useState([]);

  const loadUserApplications = () => {
    axios
      .get(`http://localhost:8080/admin/dashboard/appliedServices`)
      .then((res) => {
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
        alert(err);
      });
  };

  const formatDate = (date) => {
    const d = date.split("T")[1];
    return date.replace(d, "").slice(0, -1) + " " + date.substring(11, 19);
  };

  const sendCertificate = (userId, userName, userEmail, serviceName) => {
    axios
      .get(
        `http://localhost:8080/admin/dashboard/appliedServices/userDetails/${userId}`
      )
      .then((res) => {
        axios
          .post(
            "http://localhost:8080/admin/dashboard/appliedServices/sendCertificate",
            {
              userId: userId,
              name: userName,
              email: userEmail,
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
        alert(err);
      });
  };

  const setApprove = (userId, serviceId, userName, userEmail, serviceName) => {
    axios
      .post(`http://localhost:8080/admin/dashboard/appliedServices/status`, {
        id: serviceId,
        status: "accepted",
      })
      .then((res) => {
        alert(res.data);
        sendCertificate(userId, userName, userEmail, serviceName);
        loadUserApplications();
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
      <h1 className="font-bold text-4xl text-center p-4 rounded bg-blue-800 mx-12 shadow-xl text-white">
        Users Applied for Services
      </h1>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center">User ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Service Title</th>
            <th className="text-center">Applied On</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userName.map((user, index) =>
            userAndDate.map((items) =>
              user._id === items.user
                ? serviceName.map((service) =>
                    items.service === service._id ? (
                      <tr key={index}>
                        <td>{items.user.toUpperCase()}</td>
                        <td>{user.name}</td>
                        <td>
                          {service.name.length > 85
                            ? service.name.substring(0, 85) + "..."
                            : service.name}
                        </td>
                        <td>{formatDate(items.date)}</td>
                        <td className="flex items-center justify-center gap-2">
                          <Link to={`/admin/dashboard/view-docs/${items._id}`}>
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
                                user.email,
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
                        </td>
                      </tr>
                    ) : null
                  )
                : null
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default AdminDashboard;
