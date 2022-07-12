import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SingleScheme = () => {
  const [schemesList] = useState([
    "Atal Pension Yojana",
    "Ayushman Bharat",
    "Prime Minister Awaas Yojana - Gramin",
    "SMILE Scheme for Support for Marginalised Individuals for Livelihood and Enterprise",
    "Social security relief to dependents of workers passing away due to COVID-19",
    "Support for Marginalized Individuals for Livelihood and Enterprise",
    "SUdiyaman Swanirbhar Karmasansthan Prakalpa (USKP)",
  ]);

  const page = useLocation();

  const schemeData = {
    title: "Atal Pension Yojana",
    objective:
      "Atal Pension Yojana (APY), a pension scheme launched by Government of India is focused on the unorganized sector workers.",
    benefits: [
      "Under the APY, minimum guaranteed pension of Rs. 1,000/- or 2,000/- or 3,000/- or 4,000 or 5,000/- per month will start after attaining the age of 60 years depending on the contributions bythe subscribers for their chosen pension amount.",
      "In the event of pre-mature death of the subscriber, Government has decided to give an option to the spouse of the subscriber to continue contributing to APY account of the subscriber, for the remaining vesting period, till the original subscriber would have attained the age of 60 years. The spouse of the subscriber shall be entitled to receive the same pension amount as that of the subscriber until the death of the spouse. After the death of both the subscriber and the spouse, the nominee of the subscriber shall be entitled to receive the pension wealth, as accumulated till age 60 of the subscriber.",
    ],
    eligibility: [
      "The age of the subscriber should be between 18 and 40 years.",
      "He / She should have a savings bank account/ post office savings bank account The prospective applicants may provide mobile number to the bank during their Enrolments under APY to receive periodic updates on their APY account as well as on APY scheme. Aadhaar may also be provided at the time of enrolment as APY scheme is notified for the same.",
    ],
    howToApply:
      "Approach the bank branch/ post office where individual’s savings bank account is held or open a savings account if the subscriber doesn’t have one.",
    apllicationForm: [
      "https://www.pfrda.org.in/index.cshtml",
      "https://www.pfrda.org.in/myauth/admin/showimg.cshtml?ID=1738",
    ],
  };

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        Schemes for Unemployed and Poor
      </h1>
      <div className="flex mx-20 my-10 gap-5">
        <div className="flex flex-col gap-2 p-2">
          {schemesList.map((scheme, index) => (
            <Link to={page.pathname.slice(0, -1) + (index + 1)} key={index}>
              <h3
                className={`font-semibold font-lg rounded-xl p-2 cursor-pointer ${
                  page.pathname.includes(
                    page.pathname.slice(0, -1) + (index + 1)
                  )
                    ? "bg-blue-900 text-white"
                    : "bg-gray-300"
                } `}
              >
                {scheme}
              </h3>
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-full px-5 gap-5">
          <h1 className="text-black font-semibold text-3xl">
            {schemeData.title}
          </h1>
          <ul className="flex flex-col p-5 text-blue-700 border border-blue-700 bg-gray-100 rounded-md">
            <li>1. Brief Objective</li>
            <li>2. Benefits</li>
            <li>3. Eligibility</li>
            <li>4. How to apply</li>
            <li>5. Application Form</li>
          </ul>
          <>
            <div className="flex flex-col gap-4">
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Brief Objective
              </h1>
              <p>{schemeData.objective}</p>
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Benefits
              </h1>
              {schemeData.benefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
              ))}
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Eligibility
              </h1>
              <p>
                Any Citizen of India can join APY scheme. The following are the
                eligibility criteria :-
              </p>
              {schemeData.eligibility.map((eligibility, index) => (
                <p key={index}>✅ {eligibility}</p>
              ))}
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                How to apply
              </h1>
              <p>{schemeData.howToApply}</p>
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Application Form
              </h1>
              <h2>
                To get the forms,{" "}
                <a
                  href={schemeData.apllicationForm[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800"
                >
                  Click here. ↗️
                </a>
              </h2>
              <h2>
                For more information,{" "}
                <a
                  href={schemeData.apllicationForm[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800"
                >
                  Click here. ↗️
                </a>
              </h2>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SingleScheme;
