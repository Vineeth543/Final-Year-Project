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
      <div className="flex flex-col align-items items-center justify-center gap-8 m-10">
        <h1 className="font-bold text-4xl text-red-700">Select Your Village</h1>
        <div className="flex items-center justify-center gap-10">
          <div style={{ width: "45rem" }}>
            <img
              src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/karnataka.png"
              alt="karnataka"
              className="h-full w-full"
            />
          </div>
          <form
            className="flex flex-col gap-4 justify-center items-center border-2 border-black p-32 rounded-3xl focus:border-gray-300"
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
              className="bg-green-300 px-2 py-1 rounded-xl text-xl font-semibold hover:bg-green-500 hover:text-white focus:outline-none focus:ring ring-green-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SelectVillage;
