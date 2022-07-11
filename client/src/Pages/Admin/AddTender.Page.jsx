import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddTender from "../../Components/Admin/Tender/addTender";

const AddServicePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10">
          <AddTender />
        </div>
      </div>
    </>
  );
};

export default AddServicePage;
