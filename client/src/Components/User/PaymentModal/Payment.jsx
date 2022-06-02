import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function PaymentModal({ isOpen, setIsOpen, price }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const options = {
    key: "rzp_test_3lT4wvAjvpTCBs",
    amount: price,
    currency: "INR",
    name: "Water Bill Payment",
    description: "Water Bill Submission Amount",
    image: "https://m.media-amazon.com/images/I/41+gO0x771L._SL1000_.jpg",
    handler: () => {
      setIsOpen(false);
      alert("Payment Successful.");
    },
    theme: { color: "#0000FF" },
    modal: {
      ondismiss: function () {
        console.log("Checkout form closed");
      },
    },
  };

  const launchRazorPay = () => {
    const RazorPay = new window.Razorpay(options);
    RazorPay.open();
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
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    type="button"
                    className="mt-5 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
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