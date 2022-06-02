import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminSchemes from "../../Components/Admin/Scheme/index";

const AdminSchemesPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminSchemes />
      </div>
    </>
  );
};

export default AdminSchemesPage;
