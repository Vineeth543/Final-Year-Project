import React from "react";

const AddSchemes = () => {
  const Schemes = [
    {
      key: 0,
      title: "Select Scheme Category",
    },
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
        <div className="flex flex-col w-full m-10 rounded">
          <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
            <h1 className="font-bold text-2xl">Add New Scheme</h1>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col mt-5 mb-2 px-5 gap-4">
              <label htmlFor="category" className="text-xl font-medium pl-1">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              >
                {Schemes.map((scheme) => (
                  <option value={scheme.title}>{scheme.title}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="serviceTitle"
                className="text-xl font-medium pl-1"
              >
                Scheme Title
              </label>
              <input
                type="text"
                name="serviceTitle"
                id="serviceTitle"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeObjective"
                className="text-xl font-medium pl-1"
              >
                Brief Objective
              </label>
              <input
                type="text"
                name="schemeObjective"
                id="schemeObjective"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeBenefits"
                className="text-xl font-medium pl-1"
              >
                Benefits
              </label>
              <input
                type="text"
                name="schemeBenefits"
                id="schemeBenefits"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeEligibility"
                className="text-xl font-medium pl-1"
              >
                Eligibility
              </label>
              <input
                type="text"
                name="schemeEligibility"
                id="schemeEligibility"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeApplication"
                className="text-xl font-medium pl-1"
              >
                How to apply
              </label>
              <input
                type="text"
                name="schemeApplication"
                id="schemeApplication"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeApplicationLink"
                className="text-xl font-medium pl-1"
              >
                Application Link
              </label>
              <input
                type="text"
                name="schemeApplicationLink"
                id="schemeApplicationLink"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label
                htmlFor="schemeInfoLink"
                className="text-xl font-medium pl-1"
              >
                More Information Link
              </label>
              <input
                type="text"
                name="schemeInfoLink"
                id="schemeInfoLink"
                className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              />
            </form>
          </div>
          <div className="flex w-full bg-white items-center justify-center p-5">
            <button className="flex items-center justify-center p-2 bg-blue-300 w-full">
              Submit
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default AddSchemes;
