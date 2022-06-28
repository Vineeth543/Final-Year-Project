import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import ViewPastEvents from "../../Components/Secretary/Events/viewPastEvents";

const ViewUpcomingEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <ViewPastEvents />
        </div>
      </div>
    </>
  );
};

export default ViewUpcomingEventsPage;
