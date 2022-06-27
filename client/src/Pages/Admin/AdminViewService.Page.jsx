import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminViewServices from "../../Components/Admin/Service/viewService";

const AdminViewServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminViewServices />
        </div>
      </div>
    </>
  );
};

export default AdminViewServicePage;
