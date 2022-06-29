import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ViewDocuments from "../../Components/Admin/Dashboard/viewDocuments";

const ViewUserDocumentsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <ViewDocuments />
        </div>
      </div>
    </>
  );
};

export default ViewUserDocumentsPage;
