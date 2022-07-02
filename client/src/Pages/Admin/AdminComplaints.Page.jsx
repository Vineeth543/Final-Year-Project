import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminComplaints from "../../Components/Admin/Complaints/index";

const AdminComplaintsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full gap-5 my-10">
          <AdminComplaints />
        </div>
      </div>
    </>
  );
};

export default AdminComplaintsPage;
