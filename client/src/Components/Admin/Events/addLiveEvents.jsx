import React, { useState } from "react";
import axios from "axios";

const AddLiveEvents = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const startLiveEvent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/admin/events/uploadEvent", {
        eventType: "live",
        name: title,
        place: place,
        description: description,
        date: date,
        link: link,
      })
      .then((res) => {
        alert(res.data);
        console.log(res);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  return (
    <>
      <div className="flex flex-col w-full m-10 rounded">
        <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
          <h1 className="font-bold text-2xl">Start New Live Event</h1>
        </div>
        <div className="flex flex-col shadow-xl bg-white pb-6">
          <form className="flex flex-col mt-5 mb-2 px-5 gap-4">
            <label htmlFor="name" className="text-xl font-medium pl-1">
              Event Title
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="place" className="text-xl font-medium pl-1">
              Event Place
            </label>
            <input
              type="text"
              name="place"
              id="place"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setPlace(e.target.value)}
            />
            <label htmlFor="date" className="text-xl font-medium pl-1">
              Event Date
            </label>
            <input
              type="text"
              name="date"
              id="date"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="description" className="text-xl font-medium pl-1">
              Event Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="link" className="text-xl font-medium pl-1">
              Youtube Link
            </label>
            <input
              type="text"
              name="link"
              id="link"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setLink(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 bg-blue-300 w-full"
              onClick={(e) => startLiveEvent(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddLiveEvents;
