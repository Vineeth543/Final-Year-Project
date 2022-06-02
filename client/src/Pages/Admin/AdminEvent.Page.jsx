import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminEvents from "../../Components/Admin/Events/index";

const AdminEventPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminEvents />
      </div>
    </>
  );
};

export default AdminEventPage;
