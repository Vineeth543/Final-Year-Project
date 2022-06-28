import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminEvents from "../../Components/Secretary/Events/index";

const AdminEventPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-white">
          <AdminEvents />
        </div>
      </div>
    </>
  );
};

export default AdminEventPage;
