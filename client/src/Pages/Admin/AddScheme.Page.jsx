import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddSchemes from "../../Components/Admin/Scheme/addSchemes";

const AddServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10">
          <AddSchemes />
        </div>
      </div>
    </>
  );
};

export default AddServicePage;
