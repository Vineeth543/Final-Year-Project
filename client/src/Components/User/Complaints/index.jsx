import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const Complaints = () => {
  const userId = localStorage.getItem("CCPS-userID");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState("");

  const getUsersData = () => {
    if (userId) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/user/details/${userId}`)
        .then((result) => {
          if (result.data.firstName) {
            setName(result.data.firstName + " " + result.data.lastName);
            setPhone(result.data.phone);
            setEmail(result.data.email);
            setLoading(false);
          }
        })
        .catch((err) => {
          alert(err.data);
        });
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const sendComplaint = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", userId);
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
        setLoading(false);
      })
      .catch((err) => {
        alert("Error in uploading complaint");
        setLoading(false);
      });
    document.getElementById("complaint-form").reset();
  };

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
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
                value="normal"
                id="normal"
                required
                onChange={(e) => setPriority(e.target.value)}
              />
              Normal
              <input
                type="radio"
                name="priority"
                value="average"
                id="average"
                required
                onChange={(e) => setPriority(e.target.value)}
              />
              Average
              <input
                type="radio"
                name="priority"
                value="high"
                id="high"
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
                userId
                  ? "m-auto bg-blue-500 py-1 px-2 rounded hover:bg-blue-700 text-lg hover:text-white focus:ring ring-blue-400"
                  : "m-auto bg-blue-500 py-1 px-2 rounded text-lg cursor-not-allowed"
              }
              type="submit"
              disabled={userId ? false : true}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Complaints;
