import React from "react";

const AddSchemes = () => {
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
      <div className="flex flex-col w-full m-10 rounded">
        <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
          <h1 className="font-bold text-2xl">Add New Schemes</h1>
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
                Select Scheme Category
              </option>
              {Schemes.map((scheme) => (
                <option value={scheme.title}>{scheme.title}</option>
              ))}
            </select>
            <label htmlFor="serviceTitle" className="text-xl font-medium pl-1">
              Scheme Title
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

export default AddSchemes;
