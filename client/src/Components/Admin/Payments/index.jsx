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
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
        Transactions
      </h1>
      <table className="content-table">
        <thead>
          <tr>
            <th className="text-center">Sl.No</th>
            <th className="text-center">User Name</th>
            <th className="text-center">Payment</th>
            <th className="text-center">Status</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Method</th>
            <th className="text-center">Transaction ID</th>
            <th className="text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="hover:border-2 border-blue-400">
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{payment.email}</td>
              <td className="flex items-center justify-center gap-2">
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
              <td className="text-center">
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
              <td className="text-center">{payment.amount / 100}</td>
              <td>
                <img
                  src={paymentMethods[payment.method]}
                  alt={payment.method}
                  className="w-12 m-auto"
                />
              </td>
              <td className="text-center">{payment.id.split("_")[1]}</td>
              <td className="text-center">
                {timeConverter(payment.created_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminPayments;
