import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddUpocomingEvents from "../../Components/Admin/Events/addUpcomingEvents";

const AddLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddUpocomingEvents />
        </div>
      </div>
    </>
  );
};

export default AddLiveEventsPage;
