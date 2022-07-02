import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewPastEvents from "../../Components/Admin/Events/viewPastEvents";

const ViewPastEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <ViewPastEvents />
        </div>
      </div>
    </>
  );
};

export default ViewPastEventsPage;
