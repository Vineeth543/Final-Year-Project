import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminComplaints from "../../Components/Secretary/Complaints/index";

const AdminComplaintsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminComplaints />
        </div>
      </div>
    </>
  );
};

export default AdminComplaintsPage;
