import React from "react";

const SelectVillage = () => {
  return (
    <>
      <div className="flex flex-col align-items items-center justify-center gap-8 m-10">
        <h1 className="font-bold text-4xl text-red-700">Select Your Village</h1>
        <div style={{ width: "45rem" }}>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/karnataka.png"
            alt="karnataka"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default SelectVillage;
