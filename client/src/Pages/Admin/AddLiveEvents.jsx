import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AddLiveEvents from "../../Components/Admin/Events/addLiveEvents";

const AddLiveEventsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10">
          <AddLiveEvents />
        </div>
      </div>
    </>
  );
};

export default AddLiveEventsPage;
