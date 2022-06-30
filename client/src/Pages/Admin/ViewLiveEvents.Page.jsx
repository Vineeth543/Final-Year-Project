import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewLiveEvents from "../../Components/Admin/Events/viewLiveEvents";

const ViewLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          <ViewLiveEvents />
        </div>
      </div>
    </>
  );
};

export default ViewLiveEventsPage;
