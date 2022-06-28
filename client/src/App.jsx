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

import OfficialLoginLayout from "./Pages/Official Login/Login.Layout";

// ***************** Admin Pages *************************
import AdminDashboardPage from "./Pages/Admin/AdminDashboard.Page";
import AdminServicePage from "./Pages/Admin/AdminService.Page";
import AdminSchemePage from "./Pages/Admin/AdminScheme.Page";
import AdminEventPage from "./Pages/Admin/AdminEvent.Page";
import AdminTenderPage from "./Pages/Admin/AdminTender.Page";
import AdminPaymentPage from "./Pages/Admin/AdminPayment.Page";
import AdminComplaintPage from "./Pages/Admin/AdminComplaints.Page";
import AdminUserPage from "./Pages/Admin/AdminUser.Page";
import AddServicePage from "./Pages/Admin/AddService.Page";
import AddSchemePage from "./Pages/Admin/AddScheme.Page";
import AddLiveEventsPage from "./Pages/Admin/AddLiveEvents";
import AddUpcomingEventsPage from "./Pages/Admin/AddUpcomingEvents.Page";
import PastEventsPage from "./Pages/Admin/PastEvents.Page";
import ViewUpcomingEventsPage from "./Pages/Admin/ViewUpcomingEvents.Page";
import AddPastEventsPage from "./Pages/Admin/AddPastEvents.Page";
import ViewPastEventsPage from "./Pages/Admin/ViewPastEvents.Page";
import AdminViewServicePage from "./Pages/Admin/AdminViewService.Page";
import AdminViewSingleServicePage from "./Pages/Admin/AdminViewSingleService.Page";

// ***************** Secretary Pages *************************

import SecretaryDashboardPage from "./Pages/Secretary/SecretaryDashboard.Page";
import SecretaryServicePage from "./Pages/Secretary/SecretaryService.Page";
import SecretarySchemePage from "./Pages/Secretary/SecretaryScheme.Page";
import SecretaryEventPage from "./Pages/Secretary/SecretaryEvent.Page";
import SecretaryTenderPage from "./Pages/Secretary/SecretaryTender.Page";
import SecretaryPaymentPage from "./Pages/Secretary/SecretaryPayment.Page";
import SecretaryComplaintPage from "./Pages/Secretary/SecretaryComplaints.Page";
import SecretaryUserPage from "./Pages/Secretary/SecretaryUser.Page";
import SecretaryAddServicePage from "./Pages/Secretary/SecretaryAddService.Page";
import SecretaryAddSchemePage from "./Pages/Secretary/SecretaryAddScheme.Page";
import SecretaryAddLiveEventsPage from "./Pages/Secretary/SecretaryAddLiveEvents";
import SecretaryAddUpcomingEventsPage from "./Pages/Secretary/SecretaryAddUpcomingEvents.Page";
import SecretaryPastEventsPage from "./Pages/Secretary/SecretaryPastEvents.Page";
import SecretaryViewUpcomingEventsPage from "./Pages/Secretary/SecretaryViewUpcomingEvents.Page";
import SecretaryAddPastEventsPage from "./Pages/Secretary/SecretaryAddPastEvents.Page";
import SecretaryViewPastEventsPage from "./Pages/Secretary/SecretaryViewPastEvents.Page";
import SecretaryViewServicePage from "./Pages/Secretary/SecretaryViewService.Page";
import SecretaryViewSingleServicePage from "./Pages/Secretary/SecretaryViewSingleService.Page";

// ***************** President Pages *************************

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ********************* User Routes ********************************* */}

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
        <Route
          path="/user/services/:id/:id"
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

        <Route path="/login" exact element={<OfficialLoginLayout />}></Route>

        {/* ********************* Admin Routes ********************************* */}

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
        <Route
          path="/admin/complaints/all"
          exact
          element={<AdminComplaintPage />}
        ></Route>
        <Route path="/admin/users" exact element={<AdminUserPage />}></Route>
        <Route
          path="/admin/services/add-service"
          exact
          element={<AddServicePage />}
        ></Route>
        <Route
          path="/admin/services/view/:id"
          exact
          element={<AdminViewServicePage />}
        ></Route>
        <Route
          path="/admin/services/view/:id/:id"
          exact
          element={<AdminViewSingleServicePage />}
        ></Route>
        <Route
          path="/admin/services/add-service/:id"
          exact
          element={<AddServicePage />}
        ></Route>
        <Route
          path="/admin/schemes/add-scheme"
          exact
          element={<AddSchemePage />}
        ></Route>
        <Route
          path="/admin/events/live-event"
          exact
          element={<AddLiveEventsPage />}
        ></Route>
        <Route
          path="/admin/events/upcoming"
          exact
          element={<AddUpcomingEventsPage />}
        ></Route>
        <Route
          path="/admin/events/past-event"
          exact
          element={<AddPastEventsPage />}
        ></Route>
        <Route
          path="/admin/events/view-upcoming"
          exact
          element={<ViewUpcomingEventsPage />}
        ></Route>
        <Route
          path="/admin/events/past"
          exact
          element={<PastEventsPage />}
        ></Route>
        <Route
          path="/admin/events/view-past"
          exact
          element={<ViewPastEventsPage />}
        ></Route>

        {/* ********************* Secretary Routes ********************************* */}

        <Route
          path="/secretary"
          exact
          element={<SecretaryDashboardPage />}
        ></Route>
        <Route
          path="/secretary/dashboard"
          exact
          element={<SecretaryDashboardPage />}
        ></Route>
        <Route
          path="/secretary/services"
          exact
          element={<SecretaryServicePage />}
        ></Route>
        <Route
          path="/secretary/schemes"
          exact
          element={<SecretarySchemePage />}
        ></Route>
        <Route
          path="/secretary/events"
          exact
          element={<SecretaryEventPage />}
        ></Route>
        <Route
          path="/secretary/tenders"
          exact
          element={<SecretaryTenderPage />}
        ></Route>
        <Route
          path="/secretary/payments"
          exact
          element={<SecretaryPaymentPage />}
        ></Route>
        <Route
          path="/secretary/complaints"
          exact
          element={<SecretaryComplaintPage />}
        ></Route>
        <Route
          path="/secretary/complaints/all"
          exact
          element={<SecretaryComplaintPage />}
        ></Route>
        <Route
          path="/secretary/users"
          exact
          element={<SecretaryUserPage />}
        ></Route>
        <Route
          path="/secretary/services/add-service"
          exact
          element={<SecretaryAddServicePage />}
        ></Route>
        <Route
          path="/secretary/services/view/:id"
          exact
          element={<SecretaryViewServicePage />}
        ></Route>
        <Route
          path="/secretary/services/view/:id/:id"
          exact
          element={<SecretaryViewSingleServicePage />}
        ></Route>
        <Route
          path="/secretary/services/add-service/:id"
          exact
          element={<SecretaryAddServicePage />}
        ></Route>
        <Route
          path="/secretary/schemes/add-scheme"
          exact
          element={<SecretaryAddSchemePage />}
        ></Route>
        <Route
          path="/secretary/events/live-event"
          exact
          element={<SecretaryAddLiveEventsPage />}
        ></Route>
        <Route
          path="/secretary/events/upcoming"
          exact
          element={<SecretaryAddUpcomingEventsPage />}
        ></Route>
        <Route
          path="/secretary/events/past-event"
          exact
          element={<SecretaryAddPastEventsPage />}
        ></Route>
        <Route
          path="/secretary/events/view-upcoming"
          exact
          element={<SecretaryViewUpcomingEventsPage />}
        ></Route>
        <Route
          path="/secretary/events/past"
          exact
          element={<SecretaryPastEventsPage />}
        ></Route>
        <Route
          path="/secretary/events/view-past"
          exact
          element={<SecretaryViewPastEventsPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
