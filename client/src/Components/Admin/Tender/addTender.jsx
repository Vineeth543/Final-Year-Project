import React, { useState } from "react";

const AddService = () => {
  const [tenderTitle, setTenderTitle] = useState("");
  const [tenderOverview, setTenderOverview] = useState("");
  const [tenderOpenDate, setTenderOpenDate] = useState("");
  const [tenderCloseDate, setTenderCloseDate] = useState("");

  const addNewTender = (e) => {
    e.preventDefault();
    alert("Tender added successfully");
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-white bg-blue-700 shadow-2xl border-b-2 border-blue-900 p-5 mx-10">
        Add New Tender
      </h1>
      <form
        className="flex flex-col p-5 gap-4 shadow-2xl bg-white mx-10"
        onSubmit={(e) => addNewTender(e)}
      >
        <label htmlFor="tenderTitle" className="text-xl font-medium pl-1">
          Tender Title
        </label>
        <input
          type="text"
          name="tenderTitle"
          id="tenderTitle"
          className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
          required
          onChange={(e) => setTenderTitle(e.target.value)}
        />
        <label htmlFor="tenderOverview" className="text-xl font-medium pl-1">
          Overview
        </label>
        <input
          type="text"
          name="tenderOverview"
          id="tenderOverview"
          className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
          required
          onChange={(e) => setTenderOverview(e.target.value)}
        />
        <label htmlFor="tenderOpenDate" className="text-xl font-medium pl-1">
          Opening Date
        </label>
        <input
          type="text"
          name="tenderOpenDate"
          id="tenderOpenDate"
          className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
          required
          // onFocus={(e) => (e.target.type = "date")}
          onChange={(e) => setTenderOpenDate(e.target.value)}
        />
        <label htmlFor="tenderCloseDate" className="text-xl font-medium pl-1">
          Closing Date
        </label>
        <input
          type="text"
          name="tenderCloseDate"
          id="tenderCloseDate"
          className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
          required
          onChange={(e) => setTenderCloseDate(e.target.value)}
        />

        <button
          type="submit"
          className="p-2 font-semibold bg-blue-400 hover:bg-blue-700 hover:text-white focus:ring ring-blue-400 outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddService;
