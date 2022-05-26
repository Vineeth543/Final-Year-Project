import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import LoginLayout from "./Layout/Login.Layout";
import SignupLayout from "./Layout/Signup.Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}></Route>
        <Route path="/login" exact element={<LoginLayout />}></Route>
        <Route path="/signup" exact element={<SignupLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
