import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminViewServices from "../../Components/Secretary/Service/viewService";

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
