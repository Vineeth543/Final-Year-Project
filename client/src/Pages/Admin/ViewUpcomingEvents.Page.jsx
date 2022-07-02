import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewUpcomingEvents from "../../Components/Admin/Events/viewUpcomingEvents";

const ViewUpcomingEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <ViewUpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default ViewUpcomingEventsPage;
