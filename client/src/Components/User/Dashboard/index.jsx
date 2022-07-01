import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [fatherName, setFatharName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [village, setVillage] = useState("");
  const [taluk, setTaluk] = useState("");
  const [district, setDistrict] = useState("");

  const updateProfile = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/updateProfile", {
        userId: localStorage.getItem("CCPS-userID"),
        motherName: motherName,
        fatherName: fatherName,
        address: address,
        village: village,
        taluk: taluk,
        district: district,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert("Error in updating profile");
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-sky-100 m-auto my-10">
        <form
          className="flex flex-col justify-center gap-8 font-semibold"
          onSubmit={(e) => updateProfile(e)}
        >
          <h1 className="font-bold text-4xl text-center">Fill Your Details</h1>
          <div className="flex items-center justify-center gap-6 text-xl">
            <label htmlFor="fatherName">Father Name:</label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              placeholder="Father Name"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setFatharName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-xl">
            <label htmlFor="motherName">Mother Name:</label>
            <input
              type="text"
              name="motherName"
              id="motherName"
              placeholder="Mother Name"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setMotherName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-xl">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-xl">
            <label htmlFor="village">Village:</label>
            <input
              type="text"
              name="village"
              id="village"
              placeholder="Village"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-xl">
            <label htmlFor="taluk">Taluk:</label>
            <input
              type="text"
              name="taluk"
              id="taluk"
              placeholder="Taluk"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setTaluk(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-xl">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              name="district"
              id="district"
              placeholder="District"
              className="text-lg border shadow-sm border-slate-300 focus:outline-orange-200 pl-1"
              required
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="m-auto bg-blue-500 py-1 px-2 rounded-xl hover:bg-blue-700 hover:text-white focus:ring ring-blue-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserDashboard;
