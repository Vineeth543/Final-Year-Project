import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import axios from "axios";

export default function PaymentModal({ isOpen, setIsOpen, price }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");

  const getUserDetails = () => {
    axios
      .post("http://localhost:8080/user/details", {
        userId: localStorage.getItem("CCPS-userID"),
      })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => {
        alert("Error in getting user details");
      });
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_qBHNeycDgsDQcu",
      amount: price * 100,
      currency: "INR",
      name: "Water Bill Payment",
      description: "Water Bill Submission Amount",
      image: "https://m.media-amazon.com/images/I/41+gO0x771L._SL1000_.jpg",
      order_id: data.id,
      remember_customer: true,
      prefill: {
        name: userName,
        email: userEmail,
        contact: userPhone,
      },
      handler: async (response) => {
        try {
          const data = await axios.post(
            "http://localhost:8080/user/payments/verify",
            response
          );
          console.log(data);
          setIsOpen(false);
          alert("Payment Successful.");
        } catch (error) {
          console.log(error);
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
          amount: 500,
        }
      );
      console.log(data);
      getUserDetails();
      initPayment(data.data);
    } catch (error) {
      console.log(error);
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
                    Pay ₹{price}
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
