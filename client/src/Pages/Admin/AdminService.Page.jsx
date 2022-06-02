import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminServices from "../../Components/Admin/Service/index";

const AdminServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminServices />
      </div>
    </>
  );
};

export default AdminServicePage;
