import React from "react";

const SingleScheme = () => {
  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        Schemes for Unemployed and Poor
      </h1>
      <div className="flex mx-20 my-10 gap-5">
        <div className="flex flex-col gap-2 w-1/3 px-2 pt-2 ">
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Atal Pension Yojana
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Ayushman Bharat
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Prime Minister Awaas Yojana - Gramin
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            SMILE Scheme for Support for Marginalised Individuals for Livelihood
            and Enterprise
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Social security relief to dependents of workers passing away due to
            COVID-19
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Support for Marginalized Individuals for Livelihood and Enterprise
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            SUdiyaman Swanirbhar Karmasansthan Prakalpa (USKP)
          </h1>
        </div>
        <div className="flex flex-col w-full px-5 gap-5">
          <h1 className="text-black font-semibold text-3xl">
            Atal Pension Yojana
          </h1>
          <div className="flex border border-blue-700 bg-gray-100 rounded-md">
            <ul className="flex flex-col p-5 text-blue-700">
              <li>
                <button>1. Brief Objective</button>
              </li>
              <li>
                <button>2. Benefits</button>
              </li>
              <li>
                <button>3. Eligibility</button>
              </li>
              <li>
                <button>4. How to apply</button>
              </li>
              <li>
                <button>5. Application Form</button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
              Brief Objective
            </h1>
            <p>
              Atal Pension Yojana (APY), a pension scheme launched by Government
              of India is focused on the unorganized sector workers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
              Benefits
            </h1>
            <p>
              Under the APY, minimum guaranteed pension of Rs. 1,000/- or
              2,000/- or 3,000/- or 4,000 or 5,000/- per month will start after
              attaining the age of 60 years depending on the contributions by
              the subscribers for their chosen pension amount.
            </p>
            <p>
              In the event of pre-mature death of the subscriber, Government has
              decided to give an option to the spouse of the subscriber to
              continue contributing to APY account of the subscriber, for the
              remaining vesting period, till the original subscriber would have
              attained the age of 60 years. The spouse of the subscriber shall
              be entitled to receive the same pension amount as that of the
              subscriber until the death of the spouse. After the death of both
              the subscriber and the spouse, the nominee of the subscriber shall
              be entitled to receive the pension wealth, as accumulated till age
              60 of the subscriber.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
              Eligibility
            </h1>
            <p>
              Any Citizen of India can join APY scheme. The following are the
              eligibility criteria :-
            </p>
            <ul className="flex gap-2">
              ✅
              <li>
                The age of the subscriber should be between 18 and 40 years.
              </li>
            </ul>
            <ul className="flex gap-2">
              ✅
              <li>
                He / She should have a savings bank account/ post office savings
                bank account The prospective applicants may provide mobile
                number to the bank during their Enrolments under APY to receive
                periodic updates on their APY account as well as on APY scheme.
                Aadhaar may also be provided at the time of enrolment as APY
                scheme is notified for the same.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
              How to apply
            </h1>
            <p>
              Approach the bank branch/ post office where individual’s savings
              bank account is held or open a savings account if the subscriber
              doesn’t have one.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
              Application Form
            </h1>
            <ul className="flex flex-col gap-2">
              <li>
                To get the forms,{" "}
                <button className="text-blue-800">Click here. ↗️</button>
              </li>
              <li>
                For more information,{" "}
                <button className="text-blue-800">Click here. ↗️</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleScheme;
