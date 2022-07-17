import React, { useState } from "react";

const Complaints = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [images, setImages] = useState("");

  const sendComplaint = (e) => {
    e.preventDefault();
    console.log(name, email, mobile, subject, description, priority, images);
    alert("Complaint sent.");
    document.getElementById("complaint-form").reset();
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Complaint Form</h1>
      <form
        className="flex flex-col m-auto gap-10 font-semibold text-xl"
        onSubmit={(e) => sendComplaint(e)}
        id="complaint-form"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="fullname">Fullname :</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            className="text-lg border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded-sm pl-1"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="text-lg border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded-sm pl-1"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="mobile">Mobile No :</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Mobile No"
            className="text-lg border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded-sm pl-1"
            required
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="subject">Complaint Subject :</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Complaint Subject"
            className="text-lg border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded-sm pl-1"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="complaints" className="text-center">
            Write your issue here :
          </label>
          <textarea
            id="complaints"
            name="complaints"
            rows="5"
            cols="49"
            placeholder="Describe your issue here"
            className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded-sm pl-1"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="priority">Set Priority</label>
          <input
            type="radio"
            name="priority"
            value="critical"
            id="critical"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          Critical
          <input
            type="radio"
            name="priority"
            value="high"
            id="high"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          High
          <input
            type="radio"
            name="priority"
            value="low"
            id="low"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          Average
        </div>
        <div>
          <label htmlFor="complaintImages">Upload Photos </label>
          <input
            type="file"
            name="complaintImages"
            id="complaintImages"
            required
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <button className="m-auto bg-blue-500 py-1 px-2 rounded hover:bg-blue-700 text-lg hover:text-white focus:ring ring-blue-400">
          Submit
        </button>
      </form>
    </>
  );
};

export default Complaints;
