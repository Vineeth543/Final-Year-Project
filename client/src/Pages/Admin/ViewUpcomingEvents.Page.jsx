import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewUpcomingEvents from "../../Components/Admin/Events/viewUpcomingEvents";

const ViewUpcomingEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <ViewUpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default ViewUpcomingEventsPage;
