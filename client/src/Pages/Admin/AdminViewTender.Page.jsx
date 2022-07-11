import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminViewTender from "../../Components/Admin/Tender/viewTender";

const AdminViewTenderPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminViewTender />
        </div>
      </div>
    </>
  );
};

export default AdminViewTenderPage;
