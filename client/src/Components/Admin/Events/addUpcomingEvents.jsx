import React, { useState } from "react";
import axios from "axios";

const AddUpcomingEvents = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState();

  const addUpcomingEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("eventType", "upcoming");
    formData.append("date", date);
    formData.append("description", description);
    formData.append("place", place);
    formData.append("eventPoster", poster);
    axios
      .post("http://localhost:8080/admin/events/uploadEvent/aws", formData)
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error in uploading event");
      });
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-white bg-green-700 shadow-2xl border-b-2 border-green-900 p-5 mx-10">
        Add New Upcoming Event
      </h1>
      <form
        className="flex flex-col p-5 gap-4 shadow-2xl bg-white mx-10"
        onSubmit={(e) => addUpcomingEvent(e)}
      >
        <label htmlFor="name" className="text-xl font-medium pl-1">
          Event Title
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 p-1 focus:border-green-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-green-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-green-200 focus:outline-none rounded"
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
          className="border-2 p-1 focus:border-green-200 focus:outline-none rounded"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="eventPoster" className="text-xl font-medium pl-1">
          Event Poster
        </label>
        <input
          type="file"
          name="eventPoster"
          id="eventPoster"
          className="border-2 p-1 focus:border-green-200 focus:outline-none rounded"
          required
          onChange={(e) => setPoster(e.target.files[0])}
        />
        <button
          type="submit"
          className="p-2 font-semibold bg-green-400 hover:bg-green-700 hover:text-white focus:ring ring-green-400"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUpcomingEvents;
