import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);

  const paymentMethods = {
    card: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png",
    mastercard:
      "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png",
    upi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png",
    amex: "https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo-700x394.png",
    gpay: "https://upload.wikimedia.org/wikipedia/commons/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg",
    phonepe: "https://cdn.worldvectorlogo.com/logos/phonepe-1.svg",
  };

  function timeConverter(UNIX_timestamp) {
    var DATE = new Date(UNIX_timestamp * 1000);
    var months = [
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
    var year = DATE.getFullYear();
    var month = months[DATE.getMonth()];
    var date = DATE.getDate();
    var hour = DATE.getHours() < 10 ? "0" + DATE.getHours() : DATE.getHours();
    var min =
      DATE.getMinutes() < 10 ? "0" + DATE.getMinutes() : DATE.getMinutes();
    var sec =
      DATE.getSeconds() < 10 ? "0" + DATE.getSeconds() : DATE.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const getPaymentsData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/user/payments/all"
      );
      setPayments(data.data.items);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPaymentsData();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-gray-400 mx-12">
        Transactions
      </h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>User Name</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Transaction ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.email}</td>
              <td className="flex items-center gap-2">
                <img
                  src={
                    payment.description === "Water Bill Submission Amount"
                      ? "https://www.freepnglogos.com/uploads/water-drop-png/water-drop-png-index-content-uploads-12.png"
                      : "https://www.freepnglogos.com/uploads/house-png/home-house-icon-34.png"
                  }
                  alt={payment.for}
                  className="h-8"
                />
                {payment.description.substring(0, 10)}
              </td>
              <td>
                <span
                  className={
                    payment.status === "captured"
                      ? "rounded bg-green-500 text-black p-2"
                      : payment.status === "failed"
                      ? "rounded bg-red-500 text-black p-2"
                      : "rounded bg-yellow-500 text-black p-2"
                  }
                >
                  {payment.status === "captured"
                    ? "Paid"
                    : payment.status === "failed"
                    ? "Failed"
                    : "Pending"}
                </span>
              </td>
              <td>{payment.amount / 100}</td>
              <td>
                <img
                  src={paymentMethods[payment.method]}
                  alt={payment.method}
                  className="w-12"
                />
              </td>
              <td>{payment.id.split("_")[1]}</td>
              <td>{timeConverter(payment.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminPayments;
