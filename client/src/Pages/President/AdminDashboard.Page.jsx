import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminDashboard from "../../Components/Admin/Dashboard/index";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminDashboard />
      </div>
    </>
  );
};

export default AdminDashboardPage;
