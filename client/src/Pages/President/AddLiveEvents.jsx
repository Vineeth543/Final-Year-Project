import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddLiveEvents from "../../Components/Admin/Events/addLiveEvents";

const AddLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddLiveEvents />
        </div>
      </div>
    </>
  );
};

export default AddLiveEventsPage;
