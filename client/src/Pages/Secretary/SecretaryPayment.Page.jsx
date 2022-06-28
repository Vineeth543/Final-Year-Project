import React from "react";

import Sidebar from "../../Components/Secretary/Sidebar/Sidebar";
import AdminPayments from "../../Components/Secretary/Payments/index";

const AdminPaymentsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full h-full bg-gray-200">
          <AdminPayments />
        </div>
      </div>
    </>
  );
};

export default AdminPaymentsPage;
