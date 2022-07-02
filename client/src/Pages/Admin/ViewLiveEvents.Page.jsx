import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewLiveEvents from "../../Components/Admin/Events/viewLiveEvents";

const ViewLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <ViewLiveEvents />
        </div>
      </div>
    </>
  );
};

export default ViewLiveEventsPage;
