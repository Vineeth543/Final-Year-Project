import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AddSchemes from "../../Components/Secretary/Scheme/addSchemes";

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
