import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./Layout/Home.Layout";
import UserHomeLayout from "./Layout/User.Home.Layout";
import SignupLayout from "./Layout/Signup.Layout";
import LoginLayout from "./Layout/Login.Layout";
import ServiceLayout from "./Layout/Service.Layout";
import SingleServiceLayout from "./Layout/SingleService.Layout";
import SchemesLayout from "./Layout/Schemes.Layout";
import SingleSchemeLayout from "./Layout/SingleScheme.Layout";
import EventsLayout from "./Layout/Events.Layout";
import TendersLayout from "./Layout/Tenders.Layout";
import PaymentsLayout from "./Layout/Payments.Layout";
import ComplaintsLayout from "./Layout/Complaints.Layout";
import AdminDashboardPage from "./Pages/Admin/AdminDashboard.Page";
import AdminServicePage from "./Pages/Admin/AdminService.Page";
import AdminSchemePage from "./Pages/Admin/AdminScheme.Page";
import AdminEventPage from "./Pages/Admin/AdminEvent.Page";
import AdminTenderPage from "./Pages/Admin/AdminTender.Page";
import AdminPaymentPage from "./Pages/Admin/AdminPayment.Page";
import AdminComplaintPage from "./Pages/Admin/AdminComplaints.Page";
import AdminUserPage from "./Pages/Admin/AdminUser.Page";

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
        <Route
          path="/user/schemes/:id"
          exact
          element={<SingleSchemeLayout />}
        ></Route>
        <Route path="/user/tenders" exact element={<TendersLayout />}></Route>
        <Route path="/user/payments" exact element={<PaymentsLayout />}></Route>
        <Route
          path="/user/complaints"
          exact
          element={<ComplaintsLayout />}
        ></Route>
        <Route path="/admin" exact element={<AdminDashboardPage />}></Route>
        <Route
          path="/admin/dashboard"
          exact
          element={<AdminDashboardPage />}
        ></Route>
        <Route
          path="/admin/services"
          exact
          element={<AdminServicePage />}
        ></Route>
        <Route
          path="/admin/schemes"
          exact
          element={<AdminSchemePage />}
        ></Route>
        <Route path="/admin/events" exact element={<AdminEventPage />}></Route>
        <Route
          path="/admin/tenders"
          exact
          element={<AdminTenderPage />}
        ></Route>
        <Route
          path="/admin/payments"
          exact
          element={<AdminPaymentPage />}
        ></Route>
        <Route
          path="/admin/complaints"
          exact
          element={<AdminComplaintPage />}
        ></Route>
        <Route path="/admin/users" exact element={<AdminUserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
