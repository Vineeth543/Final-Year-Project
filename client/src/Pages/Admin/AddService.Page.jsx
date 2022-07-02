import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddService from "../../Components/Admin/Service/addService";

const AddServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10">
          <AddService />
        </div>
      </div>
    </>
  );
};

export default AddServicePage;
