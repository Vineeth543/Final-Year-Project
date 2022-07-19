import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("http://localhost:8080/official/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
        User Data
      </h1>
      <table className="content-table dashboard complaints">
        <thead>
          <tr>
            <th className="text-center">User ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Gender</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Status</th>
            <th className="text-center">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="text-semibold" key={index}>
              <td className="text-center">{user._id}</td>
              <td className="text-center">
                {user.firstName} {user.lastName}
              </td>
              <td className="text-center">{user.gender}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">{user.phone}</td>
              <td className="text-center">
                <span className="p-2 bg-green-500 rounded text-white">
                  Active
                </span>
              </td>
              <td className="text-center">{user.createdAt.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
