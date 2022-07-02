import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminServices from "../../Components/Admin/Service/index";

const AdminServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminServices />
        </div>
      </div>
    </>
  );
};

export default AdminServicePage;
