import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminServices from "../../Components/Secretary/Service/index";

const AdminServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminServices />
        </div>
      </div>
    </>
  );
};

export default AdminServicePage;
