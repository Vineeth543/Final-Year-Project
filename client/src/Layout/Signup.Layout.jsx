import React from "react";
import Signup from "../Components/User/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const SignupLayout = () => {
  return (
    <>
      <Navbar />
      <Signup />
      <Footer />
    </>
  );
};

export default SignupLayout;
