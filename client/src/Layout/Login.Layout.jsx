import React from "react";
import Login from "../Components/Login/Login";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const LoginLayout = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;
