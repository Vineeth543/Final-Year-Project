import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminViewSingleServices from "../../Components/Admin/Service/viewSingleService";

const AdminViewSingleServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminViewSingleServices />
        </div>
      </div>
    </>
  );
};

export default AdminViewSingleServicePage;
