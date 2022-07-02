import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddUpocomingEvents from "../../Components/Admin/Events/addUpcomingEvents";

const AddLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10">
          <AddUpocomingEvents />
        </div>
      </div>
    </>
  );
};

export default AddLiveEventsPage;
