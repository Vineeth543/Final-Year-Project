import React from "react";

const AdminUsers = () => {
  const Users = [
    {
      userId: "62b930fe59bb96840baf5248",
      name: "Vineeth Serigar",
      gender: "Male",
      email: "vineethserigar17@gmail.com",
      phone: "9113937543",
      status: "Active",
      logTime: "Thu, 7th July 2022 at 09:00AM",
    },
  ];

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
            <th className="text-center">Logged In</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => (
            <tr className="text-semibold" key={index}>
              <td className="text-center">{user.userId}</td>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.gender}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">{user.phone}</td>
              <td className="text-center">
                <span
                  className={
                    user.status === "Active"
                      ? "p-2 bg-green-500 rounded text-white"
                      : "p-2 bg-yellow-500 rounded text-white"
                  }
                >
                  {user.status}
                </span>
              </td>
              <td className="text-center">{user.logTime}</td>
              <td className="text-center">
                <button className="px-2 py-1 bg-orange-500 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
