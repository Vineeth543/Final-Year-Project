import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddSchemes from "../../Components/Admin/Scheme/addSchemes";

const AddServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddSchemes />
        </div>
      </div>
    </>
  );
};

export default AddServicePage;
