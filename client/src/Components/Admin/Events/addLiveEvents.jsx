import React, { useState } from "react";
import axios from "axios";

const AddLiveEvents = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

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
    document.getElementById("live-event-form").reset();
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-white bg-red-700 shadow-2xl border-b-2 border-red-900 p-5 mx-10">
        Start New Live Event
      </h1>
      <form
        className="flex flex-col p-5 gap-4 shadow-2xl bg-white mx-10"
        onSubmit={(e) => startLiveEvent(e)}
        id="live-event-form"
      >
        <label htmlFor="name" className="text-xl font-medium pl-1">
          Event Title
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 p-1 focus:border-red-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-red-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-red-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-red-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-red-200 focus:outline-none rounded"
          required
          onChange={(e) => setLink(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 font-semibold bg-red-400 hover:bg-red-700 hover:text-white focus:ring ring-red-400"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddLiveEvents;
