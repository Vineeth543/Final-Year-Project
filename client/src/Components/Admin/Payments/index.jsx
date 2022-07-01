import React from "react";

const AdminPayments = () => {
  const paymentMethods = {
    visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png",
    mastercard:
      "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png",
    paytm:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png",
    amex: "https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo-700x394.png",
    gpay: "https://upload.wikimedia.org/wikipedia/commons/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg",
    phonepay: "https://cdn.worldvectorlogo.com/logos/phonepe-1.svg",
  };

  const Payments = [
    {
      userName: "John Doe",
      for: "Water Bill",
      status: "Paid",
      amount: "₹1000",
      method: "paytm",
      transactionID: "123456789",
      date: "28 May, 2022, 10:00 AM",
    },
    {
      userName: "John Doe",
      for: "Water Bill",
      status: "Pending",
      amount: "₹1000",
      method: "visa",
      transactionID: "123456789",
      date: "28 May, 2022, 09:52 AM",
    },
    {
      userName: "John Doe",
      for: "House Tax",
      status: "Paid",
      amount: "₹1000",
      method: "mastercard",
      transactionID: "123456789",
      date: "28 May, 2022, 13:00 PM",
    },
    {
      userName: "John Doe",
      for: "Water Bill",
      status: "Failed",
      amount: "₹1000",
      method: "amex",
      transactionID: "123456789",
      date: "28 May, 2022, 10:00 AM",
    },
    {
      userName: "John Doe",
      for: "House Tax",
      status: "Failed",
      amount: "₹1000",
      method: "phonepay",
      transactionID: "123456789",
      date: "28 May, 2022, 23:09 PM",
    },
    {
      userName: "John Doe",
      for: "Water Bill",
      status: "Pending",
      amount: "₹1000",
      method: "gpay",
      transactionID: "123456789",
      date: "28 May, 2022, 10:00 AM",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-10">
        <h1 className="font-bold text-4xl text-black text-center py-2 rounded bg-gray-400 w-full">
          Transactions
        </h1>
        <div className="flex w-full items-center justify-between px-5 font-bold text-2xl text-black">
          <div className="w-20">Sl.No</div>
          <div className="w-52">User Name</div>
          <div className="w-40">Payment</div>
          <div className="w-32">Status</div>
          <div className="w-28">Amount</div>
          <div className="w-32">Method</div>
          <div className="w-48">Transaction ID</div>
          <div className="w-48 pl-6">Date</div>
        </div>
        <div className="flex flex-col rounded-md bg-white shadow-xl">
          {Payments.map((payment, index) => (
            <div className="flex p-10 border-green-400 hover:border-2 py-4 items-center justify-between text-lg font-semibold rounded">
              <div className="w-20">{index + 1}</div>
              <div className="w-48">{payment.userName}</div>
              <div className="flex items-center justify-start gap-2 w-44">
                <img
                  src={
                    payment.for === "Water Bill"
                      ? "https://www.freepnglogos.com/uploads/water-drop-png/water-drop-png-index-content-uploads-12.png"
                      : "https://www.freepnglogos.com/uploads/house-png/home-house-icon-34.png"
                  }
                  alt={payment.for}
                  className="h-8"
                />
                {payment.for}
              </div>
              <div className="w-36 pl-4">
                <span
                  className={
                    payment.status === "Paid"
                      ? "px-1 rounded bg-green-500"
                      : payment.status === "Failed"
                      ? "px-1 rounded bg-red-500"
                      : "px-1 rounded bg-yellow-500"
                  }
                >
                  {payment.status}
                </span>
              </div>
              <div className="w-28 pl-4">{payment.amount}</div>
              <div className="w-32 pl-4">
                <img
                  src={paymentMethods[payment.method]}
                  alt={payment.method}
                  className="w-12 h-8"
                />
              </div>
              <div className="w-48 pl-8">{payment.transactionID}</div>
              <div className="w-52 text-gray-400">{payment.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPayments;
