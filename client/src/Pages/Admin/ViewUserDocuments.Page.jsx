import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewDocuments from "../../Components/Admin/Dashboard/viewDocuments";

const ViewUserDocumentsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full gap-5 my-10">
          <ViewDocuments />
        </div>
      </div>
    </>
  );
};

export default ViewUserDocumentsPage;
