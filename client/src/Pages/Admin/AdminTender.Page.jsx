import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminTenders from "../../Components/Admin/Tender/index";

const AdminTenderPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminTenders />
      </div>
    </>
  );
};

export default AdminTenderPage;
