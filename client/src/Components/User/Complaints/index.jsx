import React, { useState, useEffect } from "react";
import axios from "axios";

const Complaints = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState("");

  const getUsersData = () => {
    const useId = localStorage.getItem("CCPS-userID");
    axios
      .get(`http://localhost:8080/user/details/${useId}`)
      .then((result) => {
        if (result.data.firstName) {
          setName(result.data.firstName + " " + result.data.lastName);
          setPhone(result.data.phone);
          setEmail(result.data.email);
        }
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const sendComplaint = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("CCPS-userID"));
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("complaintFile", image);

    axios
      .post("http://localhost:8080/user/complaint/new", formData)
      .then((res) => {
        alert(res.data);
        document.getElementById("complaint-form").reset();
      })
      .catch((err) => {
        alert("Error in uploading complaint");
        document.getElementById("complaint-form").reset();
      });
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
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue={name}
            id="fullName"
            placeholder="Full Name"
            className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="phone">Phone</label>
          <input
            type="nuber"
            name="phone"
            defaultValue={phone}
            id="phone"
            placeholder="Phone Number"
            className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            id="email"
            placeholder="Email"
            className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="complaints" className="text-center">
            Write your issue here :
          </label>
          <textarea
            id="complaints"
            name="complaints"
            rows="9"
            cols="50"
            placeholder="Describe your issue here"
            className="border shadow-sm border-slate-400 focus:border-orange-200 outline-none rounded pl-1"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="priority">Set Priority</label>
          <input
            type="radio"
            name="priority"
            value="Normal"
            id="Normal"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          Normal
          <input
            type="radio"
            name="priority"
            value="Average"
            id="Average"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          Average
          <input
            type="radio"
            name="priority"
            value="High"
            id="High"
            required
            onChange={(e) => setPriority(e.target.value)}
          />
          High
        </div>
        <div>
          <label htmlFor="complaintFile">Upload Photos </label>
          <input
            type="file"
            name="complaintFile"
            id="complaintFile"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          className={
            localStorage.getItem("CCPS-userID")
              ? "m-auto bg-blue-500 py-1 px-2 rounded hover:bg-blue-700 text-lg hover:text-white focus:ring ring-blue-400"
              : "m-auto bg-blue-500 py-1 px-2 rounded text-lg cursor-not-allowed"
          }
          type="submit"
          disabled={localStorage.getItem("CCPS-userID") ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Complaints;
