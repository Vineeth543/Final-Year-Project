import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectVillage = () => {
  const [pincode, setPincode] = useState();

  const nav = useNavigate();

  const goToVillage = (e) => {
    e.preventDefault();
    if (pincode.length === 6) {
      nav("/user");
    } else {
      alert("Please enter a valid pincode");
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-4xl text-red-700">
        Select Your Village
      </h1>
      <div className="flex items-center justify-center gap-10">
        <div style={{ width: "45rem" }}>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/karnataka.png"
            alt="karnataka"
            className="w-full"
          />
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 border-4 border-red-300 p-32 rounded-3xl hover:border-green-400"
          onSubmit={(e) => goToVillage(e)}
        >
          <label htmlFor="pincode" className="text-2xl font-bold">
            Enter Pincode
          </label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            className="border-2 border-gray-400 outline-none text-center font-semibold p-1 text-lg rounded"
            placeholder="Pincode"
            required
            onChange={(e) => setPincode(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-300 px-2 py-1 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-white focus:outline-none focus:ring ring-green-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SelectVillage;
