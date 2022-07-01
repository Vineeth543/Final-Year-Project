import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminPayments from "../../Components/Admin/Payments/index";

const AdminPaymentsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full gap-5 my-10">
          <AdminPayments />
        </div>
      </div>
    </>
  );
};

export default AdminPaymentsPage;
