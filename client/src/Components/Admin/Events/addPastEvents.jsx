import React from "react";

const addPastEvents = () => {
  return (
    <>
      <div className="flex flex-col w-full m-10 rounded">
        <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
          <h1 className="font-bold text-2xl">Add Upcoming Event Details</h1>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col mt-5 mb-2 px-5 gap-4">
            <label htmlFor="eventTitle" className="text-xl font-medium pl-1">
              Event Title
            </label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            />
            <label htmlFor="eventTitle" className="text-xl font-medium pl-1">
              Event Place
            </label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            />
          </form>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col mt-5 mb-2 px-5 gap-4"></form>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col mt-5 mb-2 px-5 gap-4">
            <label htmlFor="eventTitle" className="text-xl font-medium pl-1">
              Event Date
            </label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            />
          </form>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col mt-5 mb-2 px-5 gap-4">
            <label htmlFor="eventLink" className="text-xl font-medium pl-1">
              Event Description
            </label>
            <input
              type="text"
              name="eventLink"
              id="eventLink"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
            />
          </form>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form className="flex flex-col px-5 py-3 gap-4">
            <label htmlFor="eventPoster" className="text-xl font-medium pl-1">
              Event Poster
            </label>
            <input
              type="file"
              name="eventPoster"
              id="eventPoster"
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
  );
};

export default addPastEvents;
