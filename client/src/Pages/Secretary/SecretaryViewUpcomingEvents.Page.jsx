import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import ViewUpcomingEvents from "../../Components/Secretary/Events/viewUpcomingEvents";

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
