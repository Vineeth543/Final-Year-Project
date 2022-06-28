import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AddPastEvents from "../../Components/Secretary/Events/addPastEvents";

const AddPastEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AddPastEvents />
        </div>
      </div>
    </>
  );
};

export default AddPastEventsPage;
