import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const AdminPayments = () => {
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);

  const paymentMethods = {
    Visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png",
    MasterCard:
      "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png",
    upi: "https://raw.githubusercontent.com/Vineeth543/Project-Images/52cfe2f6c3b6509f1846c3a4baf98c4424086f95/upi.svg",
    RuPay:
      "https://raw.githubusercontent.com/Vineeth543/Project-Images/7b3c3c784f0d20d1956202bc797b5fda2a8e5801/rupay-logo.svg",
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
      setLoading(!loading);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPaymentsData();
  }, []);

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
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
                  {payment.card ? (
                    <td className="text-center">{payment.card.name}</td>
                  ) : (
                    <td className="text-center">{payment.email}</td>
                  )}
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
                      src={
                        payment.card
                          ? paymentMethods[payment.card.network]
                          : paymentMethods["upi"]
                      }
                      alt={payment.method}
                      className="w-12 m-auto object-cover"
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
      )}
    </>
  );
};

export default AdminPayments;
