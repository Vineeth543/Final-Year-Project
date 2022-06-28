import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminPayments from "../../Components/Admin/Payments/index";

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
