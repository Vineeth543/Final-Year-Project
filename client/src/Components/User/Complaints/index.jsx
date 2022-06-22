import React from "react";

const Complaints = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-sky-100 m-auto scrollbar-hide">
        <form className="flex flex-col justify-center gap-8 font-semibold my-10 w-1/2">
          <h1 className="font-bold text-4xl text-center">Complaint Form</h1>
          <div className="flex items-center justify-center gap-6 text-xl">
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
          <div className="flex items-center justify-center gap-14 text-xl">
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
            <label htmlFor="mobile" className="text-xl">
              Mobile No:
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Mobile No"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200"
              required
            />
          </div>
          <div className="flex flex-col text-center gap-4 text-xl">
            <label htmlFor="complaints">Enter your complaint here:</label>
            <textarea
              id="complaints"
              name="complaints"
              rows="8"
              className="border shadow-sm border-slate-300 focus:outline-orange-200"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-3 text-xl ">
            <label htmlFor="file">Upload Photos:</label>
            <input type="file" name="file" id="file" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 ">
            <button
              type="submit"
              className="bg-blue-500 p-2 px-4 rounded-2xl hover:bg-blue-700 hover:text-white"
              // onClick={alert("Complaint Submitted")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Complaints;
