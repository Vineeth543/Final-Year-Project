import React from "react";

const SelectVillage = () => {
  return (
    <>
      <div className="flex flex-col align-items items-center justify-center gap-8 m-10">
        <h1 className="font-bold text-4xl text-red-700">Select Your Village</h1>
        <div className="flex items-center justify-center gap-10">
          <div style={{ width: "45rem" }}>
            <img
              src="https://www.karnataka.gov.in/frontend/assets/img/logos/Karnataka_map_latest_2021_en.png"
              alt="karnataka"
              className="h-full w-full"
            />
          </div>
          <form className="flex flex-col gap-4 justify-center items-center border-2 border-black p-32 rounded-3xl focus:border-gray-300">
            <label htmlFor="village" className="text-2xl font-bold">
              Enter Pincode
            </label>
            <input
              type="number"
              name="village"
              id="village"
              className="border-2 border-gray-400 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-300 p-2 rounded-xl text-xl font-semibold"
              // onSubmit={(window.location.href = "/user")}
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
