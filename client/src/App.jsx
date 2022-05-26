import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import LoginLayout from "./Layout/Login.Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}></Route>
        <Route path="/login" exact element={<LoginLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
