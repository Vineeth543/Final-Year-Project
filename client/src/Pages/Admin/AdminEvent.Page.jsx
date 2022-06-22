import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminEvents from "../../Components/Admin/Events/index";

const AdminEventPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminEvents />
        </div>
      </div>
    </>
  );
};

export default AdminEventPage;
