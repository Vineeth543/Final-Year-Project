import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AdminDashboard from "../Components/Admin/Dashboard";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <AdminDashboard />
      <Footer />
    </>
  );
};

export default AdminLayout;
