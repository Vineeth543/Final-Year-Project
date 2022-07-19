import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { useLocation, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheck, FaDownload } from "react-icons/fa";
import {
  MdWork,
  MdReportProblem,
  MdMiscellaneousServices,
  MdNotifications,
} from "react-icons/md";
import axios from "axios";

const UserProfile = () => {
  const [withdrawn, setWithdrawn] = useState();
  let section = useLocation().pathname.split("/")[3];

  const tabs = [
    "Account",
    "Services",
    "Tenders",
    "Payments",
    "Complaints",
    "Notifications",
  ];

  const icons = [
    <FaHome className="text-4xl" />,
    <MdMiscellaneousServices className="text-4xl" />,
    <MdWork className="text-4xl" />,
    <FaMoneyCheck className="text-4xl" />,
    <MdReportProblem className="text-4xl" />,
    <MdNotifications className="text-4xl" />,
  ];

  const Services = [
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Applied",
      remarks: "NA",
      documents: "NA",
    },
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Delivered",
      remarks: "NA",
      documents: "NA",
    },
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Forwarderd",
      remarks: "NA",
      documents: "NA",
    },
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Forwarderd",
      remarks: "NA",
      documents: "NA",
    },
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Delivered",
      remarks: "NA",
      documents: "NA",
    },
    {
      title: "Scholarship for Engg. Students",
      appNo: "62B930FE59BB96840BAF5248",
      date: "22-05-2022",
      status: "Delivered",
      remarks: "NA",
      documents: "NA",
    },
  ];

  const Tenders = [
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Applied",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Accepted",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Accepted",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Rejected",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Applied",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
    {
      title: "Tender for Supply of Materials",
      refNo: "YTEWF3432234GUYRG32",
      date: "31-12-2022",
      status: "Rejected",
      bidAmount: "Rs. 1,00,000",
      remark: "NA",
      document: "NA",
    },
  ];

  const Payments = [
    {
      payment: "Water Bill",
      amount: "Rs. 500",
      status: "Paid",
      ID: "Jq0qAOujJhPj7w",
      method: "UPI",
      date: "22-05-2022",
      receipt: "NA",
    },
    {
      payment: "House Tax",
      amount: "Rs. 500",
      status: "Failed",
      ID: "Jq0qAOujJhPj7w",
      method: "CARD",
      date: "22-05-2022",
      receipt: "NA",
    },
    {
      payment: "Water Bill",
      amount: "Rs. 500",
      status: "Paid",
      ID: "Jq0qAOujJhPj7w",
      method: "UPI",
      date: "22-05-2022",
      receipt: "NA",
    },
    {
      payment: "House Tax",
      amount: "Rs. 500",
      status: "Pending",
      ID: "Jq0qAOujJhPj7w",
      method: "UPI",
      date: "22-05-2022",
      receipt: "NA",
    },
    {
      payment: "House Tax",
      amount: "Rs. 500",
      status: "Pending",
      ID: "Jq0qAOujJhPj7w",
      method: "CARD",
      date: "22-05-2022",
      receipt: "NA",
    },
    {
      payment: "Water Bill",
      amount: "Rs. 500",
      status: "Paid",
      ID: "Jq0qAOujJhPj7w",
      method: "UPI",
      date: "22-05-2022",
      receipt: "NA",
    },
  ];

  const paymentMethods = {
    CARD: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png",
    mastercard:
      "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png",
    UPI: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png",
    amex: "https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo-700x394.png",
    gpay: "https://upload.wikimedia.org/wikipedia/commons/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg",
    phonepe: "https://cdn.worldvectorlogo.com/logos/phonepe-1.svg",
  };

  const Complaints = [
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "Average",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "High",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "High",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "Normal",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "Average",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
    {
      ID: "Jq0qAOujJhPj7w",
      priority: "Normal",
      issue: "Street Light is not working",
      date: "22-05-2022",
      status: "Pending",
      remark: "NA",
    },
  ];

  const Notifications = [
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "22-05-2022",
    },
  ];

  const readNotification = (id) => {
    alert("Notification marked as read.");
  };

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    // uncheckedIcon={false}
    // checkedIcon={false}
  };

  const customizeNotification = () => {
    alert("Notification preference updated.");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatharName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [village, setVillage] = useState("");
  const [taluk, setTaluk] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [photo, setPhoto] = useState("");

  const getUsersData = () => {
    const useId = localStorage.getItem("CCPS-userID");
    axios
      .get(`http://localhost:8080/user/details/${useId}`)
      .then((result) => {
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setMobile(result.data.phone);
        setEmail(result.data.email);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated.");
    document.getElementById("updateProfile-form").reset();
  };

  const AccountTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Account Settings</h1>
        <form
          className="flex flex-col mr-44 gap-10 font-semibold text-2xl"
          onSubmit={(e) => updateProfile(e)}
          id="updateProfile-form"
        >
          <div className="flex justify-between">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex items-center justify-between">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  className="text-lg bg-blue-100 cursor-not-allowed border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between gap-16">
                <label htmlFor="fatherName">Father Name</label>
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  placeholder="Father Name"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setFatharName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={mobile}
                  disabled
                  className="text-lg bg-blue-100 cursor-not-allowed border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="taluk">Taluk</label>
                <input
                  type="text"
                  name="taluk"
                  id="taluk"
                  placeholder="Taluk"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setTaluk(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  type="number"
                  name="pinCode"
                  id="pinCode"
                  placeholder="Pin Code"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  disabled
                  className="text-lg bg-blue-100 cursor-not-allowed border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                />
              </div>
              <div className="flex items-center justify-between gap-16">
                <label htmlFor="motherName">Mother Name</label>
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  placeholder="Mother Name"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  disabled
                  className="text-lg bg-blue-100 cursor-not-allowed border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="village">Village</label>
                <input
                  type="text"
                  name="village"
                  id="village"
                  placeholder="Village"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setVillage(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  placeholder="District"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="profile">Photo</label>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="text-lg pl-2 outline-none"
                  required
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-fit text-2xl text-white p-3 bg-blue-500 rounded hover:bg-blue-700 focus:ring ring-blue-400 outline-none"
          >
            Update
          </button>
        </form>
      </div>
    );
  };

  const ServiceTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] shadow-2xl bg-white px-12 py-20">
        <h1 className="font-bold text-5xl">Services Applied</h1>
        <table className="serviceStatus">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Service Name</th>
              <th>Application No.</th>
              <th>Applied On</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {Services.map((service, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {service.title.length > 20
                    ? service.title.substring(0, 20) + "..."
                    : service.title}
                </td>
                <td>{service.appNo}</td>
                <td>{service.date}</td>
                <td>
                  <h3
                    className={
                      service.status === "Delivered"
                        ? "w-28 mx-auto rounded bg-green-500 text-white py-1"
                        : service.status === "Applied"
                        ? "w-28 mx-auto rounded bg-blue-500 text-white py-1"
                        : "w-28 mx-auto rounded bg-yellow-500 text-white py-1"
                    }
                  >
                    {service.status}
                  </h3>
                </td>
                <td>{service.remarks}</td>
                <td>
                  {service.status === "Delivered" ? (
                    <FaDownload className="text-2xl mx-auto cursor-pointer" />
                  ) : (
                    "NA"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const TenderTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Tender Status</h1>
        <table className="tenderStatus">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Project Title</th>
              <th>Reference No.</th>
              <th>Applied On</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {Tenders.map((tender, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {tender.title.length > 20
                    ? tender.title.substring(0, 20) + "..."
                    : tender.title}
                </td>
                <td>{tender.refNo}</td>
                <td>{tender.date}</td>
                <td>
                  <h3
                    className={
                      tender.status === "Accepted"
                        ? "w-28 mx-auto rounded bg-green-500 text-white py-1"
                        : tender.status === "Applied"
                        ? "w-28 mx-auto rounded bg-blue-500 text-white py-1"
                        : "w-28 mx-auto rounded bg-red-500 text-white py-1"
                    }
                  >
                    {tender.status}
                  </h3>
                </td>
                <td>{tender.remark}</td>
                <td>
                  {tender.status === "Accepted" ? (
                    <FaDownload className="text-2xl mx-auto cursor-pointer" />
                  ) : (
                    "NA"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const PaymentTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Payment History</h1>
        <table className="paymentStatus">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Method</th>
              <th>Date</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {Payments.map((payment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="flex items-center justify-center gap-2">
                  <img
                    src={
                      payment.payment === "Water Bill"
                        ? "https://www.freepnglogos.com/uploads/water-drop-png/water-drop-png-index-content-uploads-12.png"
                        : "https://www.freepnglogos.com/uploads/house-png/home-house-icon-34.png"
                    }
                    alt={payment.payment}
                    className="h-8"
                  />
                  {payment.payment}
                </td>
                <td>{payment.amount}</td>
                <td>
                  <h3
                    className={
                      payment.status === "Paid"
                        ? "w-20 mx-auto rounded bg-green-500 text-white py-1"
                        : payment.status === "Failed"
                        ? "w-20 mx-auto rounded bg-red-500 text-white py-1"
                        : "w-20 mx-auto rounded bg-yellow-500 text-white py-1"
                    }
                  >
                    {payment.status}
                  </h3>
                </td>
                <td>{payment.ID}</td>
                <td>
                  <img
                    src={paymentMethods[payment.method]}
                    alt={payment.method}
                    className="w-12 m-auto"
                  />
                </td>
                <td>{payment.date}</td>
                <td>
                  {payment.status === "Paid" ? (
                    <FaDownload className="text-2xl mx-auto cursor-pointer" />
                  ) : (
                    "NA"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const ComplaintTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Your Complaints</h1>
        <table className="complaintStatus">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Complaint ID</th>
              <th>Issue</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Complaints.map((complaint, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{complaint.ID}</td>
                <td>{complaint.issue}</td>
                <td>{complaint.date}</td>
                <td>
                  <h3
                    className={
                      complaint.priority === "Normal"
                        ? "w-20 mx-auto rounded bg-green-500 text-white py-1"
                        : complaint.priority === "High"
                        ? "w-20 mx-auto rounded bg-red-500 text-white py-1"
                        : "w-20 mx-auto rounded bg-violet-500 text-white py-1"
                    }
                  >
                    {complaint.priority}
                  </h3>
                </td>
                <td>{complaint.status}</td>
                <td>{complaint.remark}</td>
                <td>
                  <button
                    className={
                      withdrawn === index
                        ? "px-2 py-1 bg-pink-700 rounded text-white"
                        : "px-2 py-1 bg-pink-500 rounded text-white"
                    }
                    onClick={(e) => setWithdrawn(index)}
                  >
                    {withdrawn === index ? "Withdrawn" : "Withdraw"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const NotificationTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Notifications</h1>
        <table className="notification">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Notification</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Notifications.map((notification, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{notification.message}</td>
                <td>{notification.date}</td>
                <td>
                  <button
                    className="px-2 py-1 bg-red-500 rounded text-white"
                    onClick={(e) => readNotification(index)}
                  >
                    Mark as Read
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to={"/user/profile/notifications-customize"}
          className="flex w-fit text-2xl font-semibold p-3 bg-lime-400 rounded hover:bg-lime-600 hover:text-white focus:ring ring-lime-400 outline-none"
        >
          Customize
        </Link>
      </div>
    );
  };

  const CustomizeTab = () => {
    return (
      <div className="flex flex-col gap-12 border-2 w-5/6 h-[45rem] px-12 shadow-2xl bg-white py-20">
        <h1 className="font-bold text-5xl">Notifications Preferences</h1>
        <div className="flex justify-between font-semibold text-2xl mr-44">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-3xl">Select Type of Notifications</h2>
            <div className="flex items-center justify-between">
              <h3>New Service/Scheme Alerts</h3>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#2563eb"
                onHandleColor="#2693e6"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3>Application Status Updates</h3>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#2563eb"
                onHandleColor="#2693e6"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between gap-8">
              <h3>Bill/Tax Payment Remainders</h3>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#2563eb"
                onHandleColor="#2693e6"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3>Event Alerts</h3>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#2563eb"
                onHandleColor="#2693e6"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-3xl">Select Mode of Notifications</h2>
            <div className="flex items-center justify-between">
              <h3>Call</h3>
              <Switch
                onChange={handleChange}
                checked={checked}
                onHandleColor="#22c55e"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3>SMS</h3>
              <Switch
                onChange={handleChange}
                checked={checked}
                onHandleColor="#22c55e"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3>Email</h3>
              <Switch
                onChange={handleChange}
                checked={checked}
                onHandleColor="#22c55e"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3>Whatsapp</h3>
              <Switch
                onChange={handleChange}
                checked={checked}
                onHandleColor="#22c55e"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
            </div>
          </div>
        </div>
        <button
          to={"/user/profile/notifications-customize"}
          className="flex w-fit text-2xl font-semibold p-3 bg-lime-400 rounded hover:bg-lime-600 hover:text-white focus:ring ring-lime-400 outline-none"
          onClick={(e) => customizeNotification(e)}
        >
          Update
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/5 border-r border-gray-300 py-10">
          <div className="flex flex-col gap-5">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              alt="profile"
              className="w-60 m-auto object-cover"
              style={{
                borderRadius: "20rem",
              }}
            />
            <h2 className="font-bold text-4xl text-center">
              {firstName} {lastName}
            </h2>
          </div>
          <div className="flex flex-col font-semibold text-xl text-center my-10">
            {tabs.map((item, index) => (
              <Link
                to={`/user/profile/${item.toLocaleLowerCase()}`}
                key={index}
                className={
                  item.toLocaleLowerCase().includes(section.split("-")[0])
                    ? "flex items-center justify-start gap-5 bg-blue-600 text-white py-3 pl-12 border-y border-gray-200 cursor-pointer"
                    : "flex items-center justify-start gap-5 bg-white text-black py-3 pl-12 border-y border-gray-200 cursor-pointer"
                }
              >
                {icons[index]}
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full py-20">
          {section === "" || section === "account" ? AccountTab() : null}
          {section === "services" ? ServiceTab() : null}
          {section === "tenders" ? TenderTab() : null}
          {section === "payments" ? PaymentTab() : null}
          {section === "complaints" ? ComplaintTab() : null}
          {section === "notifications" ? NotificationTab() : null}
          {section === "notifications-customize" ? CustomizeTab() : null}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
