import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheck, FaDownload } from "react-icons/fa";
import {
  MdWork,
  MdReportProblem,
  MdMiscellaneousServices,
  MdNotifications,
} from "react-icons/md";

const UserProfile = () => {
  const [tab, setTabs] = useState(0);
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatharName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [village, setVillage] = useState("");
  const [taluk, setTaluk] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [photo, setPhoto] = useState("");

  console.log(
    firstName,
    lastName,
    fatherName,
    motherName,
    mobile,
    email,
    address,
    village,
    taluk,
    district,
    pinCode,
    photo
  );

  const AccountTab = () => {
    return (
      <div className="flex flex-col gap-10 border-2 w-5/6 h-[45rem] shadow-2xl bg-white py-20 px-12">
        <h1 className="font-bold text-5xl">Account Settings</h1>
        <form className="flex flex-col mr-44 gap-10 font-semibold text-2xl">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex justify-between">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-16">
                <label htmlFor="fatherName">Father Name</label>
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  placeholder="Father Name"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setFatharName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile No"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="taluk">Taluk</label>
                <input
                  type="text"
                  name="taluk"
                  id="taluk"
                  placeholder="Taluk"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setTaluk(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  type="number"
                  name="pinCode"
                  id="pinCode"
                  placeholder="Pin Code"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-16">
                <label htmlFor="motherName">Mother Name</label>
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  placeholder="Mother Name"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="village">Village</label>
                <input
                  type="text"
                  name="village"
                  id="village"
                  placeholder="Village"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setVillage(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  placeholder="District"
                  className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
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
              <th>Remark</th>
              <th>Document</th>
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
                <td>{service.status}</td>
                <td>{service.remarks}</td>
                <td>{service.documents}</td>
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
              <th>Remark</th>
              <th>Document</th>
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
                <td>{service.status}</td>
                <td>{service.remarks}</td>
                <td>{service.documents}</td>
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
        <h1 className="font-bold text-5xl">Your Complaint</h1>
        <table className="paymentStatus">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Complaint Subject</th>
              <th>Issue</th>
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
            <h2 className="font-bold text-4xl text-center">Vineeth Serigar</h2>
          </div>
          <div className="flex flex-col font-semibold text-xl text-center my-10">
            {tabs.map((item, index) => (
              <h2
                className={
                  tab === index
                    ? "flex items-center justify-start gap-5 bg-blue-600 text-white py-3 pl-12 border-y border-gray-200 cursor-pointer"
                    : "flex items-center justify-start gap-5 bg-white text-black py-3 pl-12 border-y border-gray-200 cursor-pointer"
                }
                key={index}
                onClick={(e) => setTabs(index)}
              >
                {icons[index]}
                {item}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full py-20">
          {tab === 0 ? AccountTab() : null}
          {tab === 1 ? ServiceTab() : null}
          {tab === 2 ? TenderTab() : null}
          {tab === 3 ? PaymentTab() : null}
          {tab === 4 ? ComplaintTab() : null}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
