import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminDashboard from "../../Components/Admin/Dashboard/index";
import OfficialHeader from "../../Components/Official Login/OfficialHeader";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full mb-10 gap-5">
          <OfficialHeader />
          <AdminDashboard />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
