import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

export default function PaymentModal({
  isOpen,
  setIsOpen,
  waterBill,
  homeTax,
}) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const userId = localStorage.getItem("CCPS-userID");
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");

  const getUserDetails = () => {
    axios
      .post("http://localhost:8080/user/details", {
        userId: userId,
      })
      .then((res) => {
        setName(res.data.firstName + " " + res.data.lastName);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => {
        alert("Error in getting user details");
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const initwaterBillPayment = (data) => {
    const options = {
      key: "rzp_test_qBHNeycDgsDQcu",
      amount: waterBill * 100,
      currency: "INR",
      name: "Water Bill Payment",
      description: "Water Bill Submission Amount",
      image:
        "https://clipart.world/wp-content/uploads/2021/05/Water-Drop-clipart-transparent.png",
      order_id: data.id,
      remember_customer: true,
      prefill: {
        name: userName,
        email: userEmail,
        contact: userPhone,
      },
      handler: async (response) => {
        try {
          await axios.post(
            "http://localhost:8080/user/payments/verify",
            response
          );
          setIsOpen(false);
          alert("Payment Successful.");
        } catch (error) {
          alert(error);
        }
      },
      theme: { color: "#0000FF" },
    };
    const RazorPay = new window.Razorpay(options);
    RazorPay.open();
  };

  const initHomeTaxPayment = (data) => {
    const options = {
      key: "rzp_test_qBHNeycDgsDQcu",
      amount: homeTax * 100,
      currency: "INR",
      name: "House Tax Payment",
      description: "House Tax Submission Amount",
      image:
        "https://www.freepnglogos.com/uploads/house-png/home-house-icon-34.png",
      order_id: data.id,
      notes: {
        userId: userId,
      },
      remember_customer: true,
      prefill: {
        name: userName,
        email: userEmail,
        contact: userPhone,
      },
      handler: async (response) => {
        try {
          await axios.post(
            "http://localhost:8080/user/payments/verify",
            response
          );
          setIsOpen(false);
          alert("Payment Successful.");
        } catch (error) {
          alert(error);
        }
      },
      theme: { color: "#0000FF" },
    };
    const RazorPay = new window.Razorpay(options);
    RazorPay.open();
  };

  const launchRazorPay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/user/payments/",
        {
          amount: waterBill > 0 ? waterBill : homeTax,
        }
      );
      waterBill > 0
        ? initwaterBillPayment(data.data)
        : initHomeTaxPayment(data.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please Make Your Payment Here
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Click the below button to proceed for the payment.
                  </p>
                </div>

                <div className="w-full mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{waterBill > 0 ? waterBill : homeTax}
                  </button>
                  <button
                    type="button"
                    className="mt-5 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
