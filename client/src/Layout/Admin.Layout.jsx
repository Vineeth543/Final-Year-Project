import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AdminDashboard from "../Components/Admin/Dashboard";

const AdminLayout = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <AdminDashboard />
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
