import React from "react";

const Complaints = () => {
  const sendComplaint = (e) => {
    e.preventDefault();
    alert("Complaint sent.");
  };

  return (
    <>
      <form
        className="flex flex-col m-auto gap-10 my-5 font-semibold text-xl"
        onSubmit={sendComplaint}
      >
        <h1 className="font-bold text-4xl text-center">Complaint Form</h1>
        <div className="flex items-center justify-center gap-5">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200"
            required
          />
        </div>
        <div className="flex items-center justify-center gap-14">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200"
            required
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Mobile No"
            className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="complaints" className="text-center">
            Enter your complaint here:
          </label>
          <textarea
            id="complaints"
            name="complaints"
            rows="8"
            className="border shadow-sm border-slate-300 focus:outline-orange-200"
          ></textarea>
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="file">Upload Photos:</label>
          <input type="file" name="file" id="file" required />
        </div>
        <button className="m-auto bg-blue-500 py-1 px-2 rounded-2xl hover:bg-blue-700 text-lg hover:text-white focus:ring ring-blue-400">
          Submit
        </button>
      </form>
    </>
  );
};

export default Complaints;
