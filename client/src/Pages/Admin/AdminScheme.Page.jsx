import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminSchemes from "../../Components/Admin/Scheme/index";

const AdminSchemesPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminSchemes />
        </div>
      </div>
    </>
  );
};

export default AdminSchemesPage;
