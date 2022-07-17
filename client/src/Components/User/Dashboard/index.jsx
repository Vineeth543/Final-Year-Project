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
      <h1 className="font-bold text-4xl text-center">Fill Your Details</h1>
      <form
        className="flex flex-col m-auto gap-8 font-semibold text-xl"
        onSubmit={(e) => updateProfile(e)}
      >
        <div className="flex justify-between gap-6">
          <label htmlFor="fatherName">Father Name:</label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            placeholder="Father Name"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setFatharName(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-4">
          <label htmlFor="motherName">Mother Name:</label>
          <input
            type="text"
            name="motherName"
            id="motherName"
            placeholder="Mother Name"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-6">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-6">
          <label htmlFor="village">Village:</label>
          <input
            type="text"
            name="village"
            id="village"
            placeholder="Village"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setVillage(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-6">
          <label htmlFor="taluk">Taluk:</label>
          <input
            type="text"
            name="taluk"
            id="taluk"
            placeholder="Taluk"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setTaluk(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-6">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            placeholder="District"
            className="text-lg border-2 border-slate-300 shadow-sm rounded focus:border-orange-200 pl-1 outline-none"
            required
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="m-auto bg-blue-500 py-1 px-2 rounded-xl hover:bg-blue-700 hover:text-white focus:ring ring-blue-400 outline-none text-lg"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UserDashboard;
