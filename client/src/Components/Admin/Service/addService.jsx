import React from "react";

const AddService = () => {
  const mainCategory = [
    {
      key: 0,
      title: "Select Main Category",
    },
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
      key: 0,
      title: "Select Sub Category",
    },
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
      <>
        <div className="flex flex-col w-full m-10 rounded">
          <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
            <h1 className="font-bold text-2xl">Add New Service</h1>
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
                {mainCategory.map((service) => (
                  <option value={service.title}>{service.title}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="flex flex-col shadow-xl bg-white">
            <form className="flex flex-col px-5 py-3 gap-4">
              <label htmlFor="category" className="text-xl font-medium pl-1">
                Sub Category
              </label>
              <select
                name="category"
                id="category"
                className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              >
                {subCategory.map((service) => (
                  <option value={service.title}>{service.title}</option>
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
                Service Title
              </label>
              <input
                type="text"
                name="serviceTitle"
                id="serviceTitle"
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

export default AddService;
