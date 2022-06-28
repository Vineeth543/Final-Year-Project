import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddPastEvents from "../../Components/Admin/Events/addPastEvents";

const AddPastEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddPastEvents />
        </div>
      </div>
    </>
  );
};

export default AddPastEventsPage;
