import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminViewServices from "../../Components/Admin/Service/viewService";

const AdminViewServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminViewServices />
        </div>
      </div>
    </>
  );
};

export default AdminViewServicePage;
