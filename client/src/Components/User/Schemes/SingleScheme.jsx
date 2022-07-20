import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleScheme = () => {
  const [schemesList, setSchemeList] = useState([]);
  const [schemeDetails, setSchemeDetails] = useState([]);
  const [schemeCategory, setSchemeCategory] = useState("");
  const [selectedScheme, setSelectedScheme] = useState(0);

  const page = useLocation();
  const categoryId = page.pathname.split("/")[4];

  const getShemeCategory = () => {
    axios
      .get(`http://localhost:8080/official/schemes/category/${categoryId}`)
      .then((res) => {
        setSchemeCategory(res.data.title);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getSchemeData = () => {
    axios
      .get(
        `http://localhost:8080/official/schemes/category/scheme/${categoryId}`
      )
      .then((res) => {
        if (res != null) {
          setSchemeList(res.data);
          setSchemeDetails(res.data[0]);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getShemeCategory();
    getSchemeData();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center mt-10">{schemeCategory}</h1>
      {schemesList != null && schemeDetails != null ? (
        <div className="flex mx-20 gap-5 my-10">
          <div className="flex flex-col gap-2 p-2 w-1/3">
            {schemesList.map((scheme, index) => (
              <h3
                className={
                  selectedScheme === index
                    ? "font-semibold text-md rounded-xl p-2 cursor-pointer bg-blue-900 text-white"
                    : "font-semibold text-md rounded-xl p-2 cursor-pointer bg-gray-300"
                }
                key={index}
                onClick={() => {
                  setSelectedScheme(index);
                  setSchemeDetails(schemesList[index]);
                }}
              >
                {scheme.title}
              </h3>
            ))}
          </div>
          <div className="flex flex-col w-full gap-5">
            <h1 className="font-semibold text-3xl">{schemeDetails.title}</h1>
            <ul className="flex flex-col p-5 text-blue-700 border border-blue-700 bg-gray-100 rounded-md">
              <li className="cursor-pointer">1. Brief Objective</li>
              <li className="cursor-pointer">2. Benefits</li>
              <li className="cursor-pointer">3. Eligibility</li>
              <li className="cursor-pointer">4. How to apply</li>
              <li className="cursor-pointer">5. Application Form</li>
            </ul>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-2xl border-b-2 pb-1">
                Brief Objective
              </h1>
              <p>{schemeDetails.objective}</p>
              <h1 className="font-semibold text-2xl border-b-2 pb-1">
                Benefits
              </h1>
              {schemeDetails.benefits != null
                ? schemeDetails.benefits.map((benefit, index) => (
                    <p key={index}>🎯 {benefit}</p>
                  ))
                : ""}
              <h1 className="font-semibold text-2xl border-b-2 pb-1">
                Eligibility
              </h1>
              <p>The following are the eligibility criteria :-</p>
              {schemeDetails.eligibility != null ? (
                schemeDetails.eligibility.map((eligibility, index) => (
                  <p key={index}>✅ {eligibility}</p>
                ))
              ) : (
                <p>✅ Anyone can apply to this scheme.</p>
              )}
              <h1 className="font-semibold text-2xl border-b-2 pb-1">
                How to apply
              </h1>
              <p>{schemeDetails.howToApply}</p>
              <h1 className="font-semibold text-2xl border-b-2 pb-1">
                Usefullf Links
              </h1>
              {schemeDetails.applicationLink != null ? (
                <>
                  <h2>
                    Appliction forms,{" "}
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
                <p>Links not available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-bold text-4xl text-center my-80">
          No Schemes Available. ☹️
        </h1>
      )}
    </>
  );
};

export default SingleScheme;
