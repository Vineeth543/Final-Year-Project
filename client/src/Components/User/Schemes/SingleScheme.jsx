import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SingleScheme = () => {
  const [schemesList, setSchemeList] = useState([]);
  const [schemeDetails, setSchemeDetails] = useState([]);
  const [schemeCategory, setSchemeCategory] = useState("");

  const page = useLocation();
  const category = page.pathname.split("/")[3];

  const getSchemeData = () => {
    axios
      .get(`http://localhost:8080/official/schemes/category/scheme/${category}`)
      .then((res) => {
        console.log(res);
        setSchemeList(res.data);
        setSchemeDetails(res.data[0]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getSchmeDetails = (index) => {
    setSchemeDetails(schemesList[index]);
  };

  const getShemeCategory = () => {
    axios
      .get(`http://localhost:8080/official/schemes/category/${category}`)
      .then((res) => {
        console.log(res);
        setSchemeCategory(res.data.title);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getSchemeData();
    getShemeCategory();
  }, []);

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        {schemeCategory}
      </h1>
      {schemesList !== [] ? (
        <div className="flex mx-20 my-10 gap-5">
          <div className="flex flex-col gap-2 p-2 w-1/3">
            {schemesList.map((scheme, index) => (
              <h3
                className="font-semibold font-lg rounded-xl p-2 cursor-pointer bg-gray-300 hover:bg-blue-900 hover:text-white"
                key={index}
                onClick={() => getSchmeDetails(index)}
              >
                {scheme.title}
              </h3>
            ))}
          </div>
          <div className="flex flex-col w-full px-5 gap-5">
            <h1 className="text-black font-semibold text-3xl">
              {schemeDetails.title}
            </h1>
            <ul className="flex flex-col p-5 text-blue-700 border border-blue-700 bg-gray-100 rounded-md">
              <li>1. Brief Objective</li>
              <li>2. Benefits</li>
              <li>3. Eligibility</li>
              <li>4. How to apply</li>
              <li>5. Application Form</li>
            </ul>
            <div className="flex flex-col gap-4">
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Brief Objective
              </h1>
              <p>{schemeDetails.objective}</p>
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Benefits
              </h1>
              {schemeDetails.benefits != null ? (
                schemeDetails.benefits.map((benefit, index) => (
                  <p key={index}>{benefit}</p>
                ))
              ) : (
                <p>No benefits</p>
              )}
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Eligibility
              </h1>
              <p>
                Any Citizen of India can join APY scheme. The following are the
                eligibility criteria :-
              </p>
              {schemeDetails.eligibility != null ? (
                schemeDetails.eligibility.map((eligibility, index) => (
                  <p key={index}>✅ {eligibility}</p>
                ))
              ) : (
                <p>No eligibility</p>
              )}
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                How to apply
              </h1>
              <p>{schemeDetails.howToApply}</p>
              <h1 className="text-black font-semibold text-2xl border-b-2 pb-2">
                Application Form
              </h1>
              {schemeDetails.applicationLink != null ? (
                <>
                  <h2>
                    To get the forms,{" "}
                    <a
                      href={schemeDetails.applicationLink[0]}
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
                      href={schemeDetails.applicationLink[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800"
                    >
                      Click here. ↗️
                    </a>
                  </h2>
                </>
              ) : (
                <p>No application form</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-black font-semibold text-4xl text-center m-5">
          No schemes found
        </h1>
      )}
    </>
  );
};

export default SingleScheme;
