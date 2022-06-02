import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminPayments from "../../Components/Admin/Payments/index";

const AdminPaymentsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <AdminPayments />
      </div>
    </>
  );
};

export default AdminPaymentsPage;
