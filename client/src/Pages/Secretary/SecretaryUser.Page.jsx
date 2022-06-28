import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminUsers from "../../Components/Secretary/Users/index";

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
