import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminTenders from "../../Components/Secretary/Tender/index";

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
