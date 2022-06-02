import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminComplaints from "../../Components/Admin/Complaints/index";

const AdminComplaintsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminComplaints />
      </div>
    </>
  );
};

export default AdminComplaintsPage;
