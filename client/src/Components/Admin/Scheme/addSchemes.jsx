import React, { useState } from "react";
import axios from "axios";

const AddSchemes = () => {
  const [schemeCategory, setSchemeCategory] = useState("");
  const [schemeTitle, setSchemeTitle] = useState("");
  const [objective, setObjective] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [eligibility, setEligibility] = useState([]);
  const [howToApply, setHowToApply] = useState("");
  const [application, setApplication] = useState([]);

  const getCategory = (serviceID) => {
    axios
      .get(`http://localhost:8080/admin/services/add-service/${serviceID}`)
      .then((res) => {
        const Categories = res.data;
        const subCategory = [];
        Categories.forEach((element) => {
          subCategory.push(element);
        });
        setSchemeCategory(subCategory);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const addNewScheme = (e) => {
    e.preventDefault();

    const newService = {
      serviceCategory: schemeCategory,
      name: schemeTitle,
      overview: objective,
      benefits: benefits,
      eligibility: eligibility,
      howToApply: howToApply,
      application: application,
    };

    axios
      .post("http://localhost:8080/admin/services/add-service", newService)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const Schemes = [
    {
      key: 1,
      title: "Schemes for Child Welfare",
    },
    {
      key: 2,
      title: "Schemes for Unemployed and Poor",
    },
    {
      key: 3,
      title: "Schemes for Academicians",
    },
    {
      key: 4,
      title: "Aatma Nirbhar Bharat Abhiyaan",
    },
    {
      key: 5,
      title: "Schemes for Farmers",
    },
    {
      key: 6,
      title: "Schemes for Senior Citizens",
    },
    {
      key: 7,
      title: "Schemes for Students",
    },
    {
      key: 8,
      title: "Schemes for Anganwadi workers",
    },
    {
      key: 9,
      title: "Schemes for Entrepreneurs",
    },
    {
      key: 10,
      title: "Schemes for Women",
    },
    {
      key: 11,
      title: "MGNAREGA",
    },
    {
      key: 12,
      title: "Skill Development",
    },
  ];

  return (
    <>
      <>
        <h1 className="font-bold text-2xl text-white bg-blue-700 shadow-2xl border-b-2 border-blue-900 p-5 mx-10">
          Add New Scheme
        </h1>
        <form
          className="flex flex-col p-5 gap-4 shadow-2xl bg-white mx-10"
          // onSubmit={(e) => addNewScheme(e)}
        >
          <label htmlFor="category" className="text-xl font-medium pl-1">
            Category
          </label>
          <select
            required
            name="category"
            id="category"
            className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            // onChange={(e) => getCategory(e.target.value)}
            defaultValue={"Select Category"}
          >
            <option value="Select Category" disabled>
              Select Category
            </option>
            {Schemes.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <label htmlFor="schemeTitle" className="text-xl font-medium pl-1">
            Scheme Title
          </label>
          <input
            type="text"
            name="schemeTitle"
            id="schemeTitle"
            className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            required
            onChange={(e) => setSchemeTitle(e.target.value)}
          />
          <label htmlFor="objective" className="text-xl font-medium pl-1">
            Objective
          </label>
          <input
            type="text"
            name="objective"
            id="objective"
            className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            required
            onChange={(e) => setObjective(e.target.value)}
          />
          <label htmlFor="benefits" className="text-xl font-medium pl-1">
            Benefits
          </label>
          <textarea
            rows="2"
            name="benefits"
            id="benefits"
            className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
            required
            onChange={(e) => setBenefits(e.target.value)}
          ></textarea>
          <label htmlFor="eligibility" className="text-xl font-medium pl-1">
            Eligibility
          </label>
          <textarea
            rows="2"
            name="eligibility"
            id="eligibility"
            className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
            onChange={(e) => setEligibility(e.target.value)}
            required
          ></textarea>
          <label htmlFor="howToApply" className="text-xl font-medium pl-1">
            How To Apply
          </label>
          <input
            type="text"
            name="howToApply"
            id="howToApply"
            className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
            onChange={(e) => setHowToApply(e.target.value)}
            required
          />
          <label htmlFor="formLink" className="text-xl font-medium pl-1">
            Aplication Form Link
          </label>
          <input
            type="text"
            name="formLink"
            id="formLink"
            className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
            onChange={(e) => setApplication(e.target.value)}
            required
          />
          <button
            type="submit"
            className="p-2 font-semibold bg-blue-400 hover:bg-blue-700 hover:text-white focus:ring ring-blue-400"
          >
            Submit
          </button>
        </form>
      </>
    </>
  );
};

export default AddSchemes;
