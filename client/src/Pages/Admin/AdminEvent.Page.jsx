import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminEvents from "../../Components/Admin/Events/index";

const AdminEventPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminEvents />
        </div>
      </div>
    </>
  );
};

export default AdminEventPage;
