import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminTenders from "../../Components/Admin/Tender/index";

const AdminTenderPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-white">
          <AdminTenders />
        </div>
      </div>
    </>
  );
};

export default AdminTenderPage;
