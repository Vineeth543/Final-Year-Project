import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminUsers from "../../Components/Admin/Users/index";

const AdminUserPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full gap-5 my-10">
          <AdminUsers />
        </div>
      </div>
    </>
  );
};

export default AdminUserPage;
