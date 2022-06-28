import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminDashboard from "../../Components/Secretary/Dashboard/index";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-white">
          <AdminDashboard />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
