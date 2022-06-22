import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminSchemes from "../../Components/Admin/Scheme/index";

const AdminSchemesPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminSchemes />
        </div>
      </div>
    </>
  );
};

export default AdminSchemesPage;
