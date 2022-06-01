import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Layout/Admin.Layout";
import EventsLayout from "./Layout/Events.Layout";
import HomeLayout from "./Layout/Home.Layout";
import LoginLayout from "./Layout/Login.Layout";
import ServiceLayout from "./Layout/Service.Layout";
import SignupLayout from "./Layout/Signup.Layout";
import SingleServiceLayout from "./Layout/SingleService.Layout";
import UserHomeLayout from "./Layout/User.Home.Layout";
import SchemesLayout from "./Layout/Schemes.Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}></Route>
        <Route path="/user" exact element={<UserHomeLayout />}></Route>
        <Route path="/user/login" exact element={<LoginLayout />}></Route>
        <Route path="/user/signup" exact element={<SignupLayout />}></Route>
        <Route path="/user/services" exact element={<ServiceLayout />}></Route>
        <Route
          path="/user/services/:id"
          exact
          element={<SingleServiceLayout />}
        ></Route>
        <Route path="/user/events" exact element={<EventsLayout />}></Route>
        <Route path="/user/schemes" exact element={<SchemesLayout />}></Route>
        <Route path="/admin" exact element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
