import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminViewSingleServices from "../../Components/Secretary/Service/viewSingleService";

const AdminViewSingleServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminViewSingleServices />
        </div>
      </div>
    </>
  );
};

export default AdminViewSingleServicePage;
