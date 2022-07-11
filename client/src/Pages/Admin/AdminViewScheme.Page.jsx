import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewSchemes from "../../Components/Admin/Scheme/viewSchemes";

const AdminViewSchemePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <ViewSchemes />
        </div>
      </div>
    </>
  );
};

export default AdminViewSchemePage;
