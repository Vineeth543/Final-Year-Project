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
  const [checked, setChecked] = useState(false);
  const section = useLocation().pathname.split("/")[3];
  const userId = localStorage.getItem("CCPS-userID");

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

  const paymentMethods = {
    Visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png",
    MasterCard:
      "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png",
    upi: "https://raw.githubusercontent.com/Vineeth543/Project-Images/52cfe2f6c3b6509f1846c3a4baf98c4424086f95/upi.svg",
    RuPay:
      "https://raw.githubusercontent.com/Vineeth543/Project-Images/7b3c3c784f0d20d1956202bc797b5fda2a8e5801/rupay-logo.svg",
  };

  const Notifications = [
    {
      message: "Your application is applied successfully",
      date: "22-05-2022",
    },
    {
      message: "Your application has been forwarded",
      date: "23-05-2022",
    },
    {
      message: "Your application has been accepted",
      date: "27-05-2022",
    },
  ];

  const timeConverter = (unixTimeStamp) => {
    const DATE = new Date(unixTimeStamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = DATE.getFullYear();
    const month = months[DATE.getMonth()];
    const date = DATE.getDate();
    const hour = DATE.getHours() < 10 ? "0" + DATE.getHours() : DATE.getHours();
    const min =
      DATE.getMinutes() < 10 ? "0" + DATE.getMinutes() : DATE.getMinutes();
    const sec =
      DATE.getSeconds() < 10 ? "0" + DATE.getSeconds() : DATE.getSeconds();
    const time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  const readNotification = (id) => {
    alert("Notification marked as read.");
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
  const [currentPhoto, setCurrentPhoto] = useState("");

  const [services, setServices] = useState([]);
  const [tenders, setTenders] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [payments, setPayments] = useState([]);

  const getUsersData = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/details/${userId}`)
        .then((result) => {
          setFirstName(result.data.firstName);
          setLastName(result.data.lastName);
          setMobile(result.data.phone);
          setEmail(result.data.email);
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  const getUserProfileData = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/profileData/${userId}`)
        .then((result) => {
          if (result.data.profilePic) {
            setFatharName(result.data.fatherName);
            setMotherName(result.data.motherName);
            setAddress(result.data.address);
            setVillage(result.data.village);
            setTaluk(result.data.taluk);
            setDistrict(result.data.district);
            setPinCode(result.data.pinCode);
            setCurrentPhoto(result.data.profilePic);
          }
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  const getUserServices = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/dashboard/services/${userId}`)
        .then((result) => {
          setServices(result.data);
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  const getUserTenders = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/dashboard/tenders/${userId}`)
        .then((result) => {
          setTenders(result.data);
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  const getUserComplaints = () => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/dashboard/complaints/${userId}`)
        .then((result) => {
          setComplaints(result.data);
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  const getUserPayments = async () => {
    if (userId) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/user/payments/all"
        );
        const Payments = data.data.items.filter(
          (item) => item.notes.userId === userId
        );
        setPayments(Payments);
      } catch (error) {
        alert(error);
      }
    }
  };

  const updateProfile = (e) => {
    if (userId) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("fatherName", fatherName);
      formData.append("motherName", motherName);
      formData.append("address", address);
      formData.append("village", village);
      formData.append("taluk", taluk);
      formData.append("district", district);
      formData.append("pinCode", pinCode);
      formData.append("profilePic", photo);
      e.preventDefault();
      axios
        .post("http://localhost:8080/user/updateProfile", formData)
        .then((res) => {
          alert(res.data);
          document.getElementById("updateProfile-form").reset();
          getUserProfileData();
        })
        .catch((err) => {
          alert("Error in updating profile");
          document.getElementById("updateProfile-form").reset();
        });
    }
  };

  const deleteUserComplaint = (id) => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/dashboard/complaints/delete/${id}`)
        .then((result) => {
          alert(result.data);
          getUserComplaints();
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  useEffect(() => {
    getUsersData();
    getUserProfileData();
    getUserServices();
    getUserTenders();
    getUserComplaints();
    getUserPayments();
  }, []);

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
                  defaultValue={fatherName}
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
                  defaultValue={address}
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
                  defaultValue={taluk}
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
                  defaultValue={pinCode}
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
                  defaultValue={motherName}
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
                  defaultValue={village}
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
                  defaultValue={district}
                  placeholder="District"
                  className="text-lg border border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 py-1 outline-none"
                  required
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="profilePic">Photo</label>
                <input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  className="text-lg pl-2 outline-none"
                  required
                  onChange={(e) => setPhoto(e.target.files[0])}
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
            {services.map((service, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {service.service.name.length > 30
                    ? service.service.name.substring(0, 30) + "..."
                    : service.service.name}
                </td>
                <td>{service.data._id.slice(-17)}</td>
                <td>{service.data.createdAt.split("T")[0]}</td>
                <td>
                  <h3
                    className={
                      service.data.status === "completed"
                        ? "w-28 mx-auto rounded bg-green-500 text-white py-1"
                        : service.data.status === "applied"
                        ? "w-28 mx-auto rounded bg-blue-500 text-white py-1"
                        : "w-28 mx-auto rounded bg-yellow-500 text-white py-1"
                    }
                  >
                    {service.data.status[0].toUpperCase() +
                      service.data.status.slice(1)}
                  </h3>
                </td>
                <td>NA</td>
                <td>
                  {service.data.status === "completed" ? (
                    <a
                      href={service.data.certificate}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="text-2xl mx-auto cursor-pointer" />
                    </a>
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
            {tenders.map((tender, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {tender.tender.title.length > 20
                    ? tender.tender.title.substring(0, 20) + "..."
                    : tender.tender.title}
                </td>
                <td>{tender.data.tender.slice(-15)}</td>
                <td>{tender.data.createdAt.split("T")[0]}</td>
                <td>
                  <h3
                    className={
                      tender.data.status === "accepted"
                        ? "w-28 mx-auto rounded bg-green-500 text-white py-1"
                        : tender.data.status === "applied"
                        ? "w-28 mx-auto rounded bg-blue-500 text-white py-1"
                        : "w-28 mx-auto rounded bg-red-500 text-white py-1"
                    }
                  >
                    {tender.data.status[0].toUpperCase() +
                      tender.data.status.slice(1)}
                  </h3>
                </td>
                <td>NA</td>
                <td>
                  {tender.data.status === "accepted" ? (
                    <a
                      href={tender.document}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="text-2xl mx-auto cursor-pointer" />
                    </a>
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
            {payments.map((payment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="flex items-center justify-center gap-2">
                  <img
                    src={
                      payment.description.split(" ")[1] === "Water Bill"
                        ? "https://www.freepnglogos.com/uploads/water-drop-png/water-drop-png-index-content-uploads-12.png"
                        : "https://www.freepnglogos.com/uploads/house-png/home-house-icon-34.png"
                    }
                    alt={payment.payment}
                    className="h-8"
                  />
                  {payment.description.substring(0, 10)}
                </td>
                <td>{payment.amount / 100}</td>
                <td>
                  <h3
                    className={
                      payment.status === "captured"
                        ? "w-20 mx-auto rounded bg-green-500 text-black py-1"
                        : payment.status === "failed"
                        ? "w-20 mx-auto rounded bg-red-500 text-black py-1"
                        : "w-20 mx-auto rounded bg-yellow-500 text-black py-1 "
                    }
                  >
                    {payment.status === "captured"
                      ? "Paid"
                      : payment.status === "failed"
                      ? "Failed"
                      : "Pending"}
                  </h3>
                </td>
                <td>{payment.id.split("_")[1]}</td>
                <td>
                  <img
                    src={
                      payment.card
                        ? paymentMethods[payment.card.network]
                        : paymentMethods["upi"]
                    }
                    alt={payment.method}
                    className="w-12 m-auto"
                  />
                </td>
                <td>{timeConverter(payment.created_at)}</td>
                <td>
                  {payment.status === "captured" ? (
                    <a
                      href={payment.receipt}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="text-2xl mx-auto cursor-pointer" />
                    </a>
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
              <th>ComplaintID</th>
              <th>Issue</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={index}>
                <td className="w-4">{index + 1}</td>
                <td>{complaint._id.slice(-12)}</td>
                <td>{complaint.description}</td>
                <td className="w-32">{complaint.createdAt.split("T")[0]}</td>
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
                <td>
                  <h2
                    className={
                      complaint.status === "Solved"
                        ? "w-20 py-1 m-auto bg-green-500 rounded text-white"
                        : complaint.status === "Processing"
                        ? "w-24 py-1 m-auto bg-yellow-500 rounded text-white"
                        : complaint.status === "Rejected"
                        ? "w-20 py-1 m-auto bg-red-500 rounded text-white"
                        : "w-20 py-1 m-auto bg-blue-500 rounded text-white"
                    }
                  >
                    {complaint.status}
                  </h2>
                </td>
                <td>{complaint.remarks}</td>
                <td>
                  <button
                    className="px-2 py-1 bg-red-700 rounded text-white"
                    onClick={(e) => deleteUserComplaint(complaint._id)}
                  >
                    Delete
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
                onChange={(nextChecked) => setChecked(nextChecked)}
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
              src={
                currentPhoto
                // ? currentPhoto
                // : "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
              }
              alt="profile"
              className="w-60 h-60 m-auto object-cover"
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
