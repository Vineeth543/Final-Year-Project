import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddService from "../../Components/Admin/Service/addService";

const AddServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddService />
        </div>
      </div>
    </>
  );
};

export default AddServicePage;
