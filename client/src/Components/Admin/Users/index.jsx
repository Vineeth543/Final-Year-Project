import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const AdminUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("http://localhost:8080/official/users")
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
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
      {loading ? (
        <MoonLoader
          color={"green"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
            User Data
          </h1>
          <table className="content-table dashboard complaints">
            <thead>
              <tr>
                <th className="text-center">User ID</th>
                <th className="text-center">First Name</th>
                <th className="text-center">LastName</th>
                <th className="text-center">Gender</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="text-semibold" key={index}>
                  <td className="text-center">{user._id}</td>
                  <td className="text-center">{user.firstName}</td>
                  <td className="text-center">{user.lastName}</td>
                  <td className="text-center">
                    {user.gender[0].toUpperCase() + user.gender.slice(1)}
                  </td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.phone}</td>
                  <td className="text-center">
                    {user.createdAt.split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AdminUsers;
