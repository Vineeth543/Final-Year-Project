import React from "react";

const AddService = () => {
  const mainCategory = [
    {
      key: 1,
      title: "Farmer Welfare",
    },
    {
      key: 2,
      title: "Electricity and Municipal Services",
    },
    {
      key: 3,
      title: "Housing related services",
    },
    {
      key: 4,
      title: "Student educational services",
    },
    {
      key: 5,
      title: "Employement and Training",
    },
    {
      key: 6,
      title: "Driving and Transport Services",
    },
    {
      key: 7,
      title: "Health and Drug related Services",
    },
    {
      key: 8,
      title: "Police and Security Services",
    },
    {
      key: 9,
      title: "Birth, Death & Marriage related Services",
    },
    {
      key: 10,
      title: "Women and Child Development",
    },
    {
      key: 11,
      title: "Labour Welfare",
    },
    {
      key: 12,
      title: "Citizen Services",
    },
  ];

  const subCategory = [
    {
      key: 1,
      title: "Farmer Welfare",
    },
    {
      key: 2,
      title: "Electricity and Municipal Services",
    },
    {
      key: 3,
      title: "Housing related services",
    },
    {
      key: 4,
      title: "Student educational services",
    },
    {
      key: 5,
      title: "Employement and Training",
    },
    {
      key: 6,
      title: "Driving and Transport Services",
    },
    {
      key: 7,
      title: "Health and Drug related Services",
    },
    {
      key: 8,
      title: "Police and Security Services",
    },
    {
      key: 9,
      title: "Birth, Death & Marriage related Services",
    },
    {
      key: 10,
      title: "Women and Child Development",
    },
    {
      key: 11,
      title: "Labour Welfare",
    },
    {
      key: 12,
      title: "Citizen Services",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 rounded">
        <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
          <h1 className="font-bold text-2xl">Add New Service</h1>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col px-5 py-3 gap-4">
            <label htmlFor="mainCategory" className="text-xl font-medium pl-1">
              Category
            </label>
            <select
              name="mainCategory"
              id="mainCategory"
              className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
            >
              <option value="" disabled selected>
                Select Main Category
              </option>
              {mainCategory.map((service) => (
                <option value={service.title}>{service.title}</option>
              ))}
            </select>
            <label htmlFor="subCategory" className="text-xl font-medium pl-1">
              Sub Category
            </label>
            <select
              name="subCategory"
              id="subCategory"
              className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
            >
              <option value="" disabled selected>
                Select Sub Category
              </option>
              {subCategory.map((service) => (
                <option value={service.title}>{service.title}</option>
              ))}
            </select>
            <label htmlFor="serviceTitle" className="text-xl font-medium pl-1">
              Service Title
            </label>
            <input
              type="text"
              name="serviceTitle"
              id="serviceTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
            />
            <button className="flex items-center justify-center p-2 text-lg font-semibold bg-blue-600 w-full focus:ring ring-blue-300 hover:text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
