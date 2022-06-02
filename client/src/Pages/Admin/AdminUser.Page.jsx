import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminUsers from "../../Components/Admin/Users/index";

const AdminUserPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminUsers />
      </div>
    </>
  );
};

export default AdminUserPage;
