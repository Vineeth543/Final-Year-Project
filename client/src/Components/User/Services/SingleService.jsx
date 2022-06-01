import React from "react";

const SingleService = () => {
  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        Farmer Welfare Services
      </h1>
      <div className="flex mx-20 my-10 gap-5">
        <div className="flex flex-col gap-2 w-1/3 border px-2 pt-2">
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Subsidy to farmers
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Laboratory testing and analysis
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Technical Information
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Seeds
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Government assisted financial grants for Farmers and Fishermen
          </h1>
          <h1 className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer">
            Other Services
          </h1>
        </div>
        <div className="flex flex-col w-full border pb-4">
          <div className="flex justify-between mx-5 my-2 items-center text-lg font-base">
            <div className="flex gap-4 items-center">
              <span className="p-2">Search:</span>
              <input
                type="text"
                name="search"
                id="search"
                className="border border-black w-24 h-8"
              />
            </div>
          </div>
          <h1 className="text-black font-semibold bg-gray-200 p-2 border-b border-black text-xl mx-5">
            Services
          </h1>
          <div className="flex items-center justify-between mx-5 border-b border-gray-400">
            <div
              className="flex items-center bg-gray-300 h-full px-2"
              style={{ width: "70rem" }}
            >
              <h1 className="text-black font-semibold text-md">
                Application for claiming subsidies for Purchase of Fish Seed -
                Fisheries Department
              </h1>
            </div>
            <div className="flex flex-col p-1 w-36 bg-gray-200">
              <button className="p-1 bg-blue-500 rounded-2xl">
                Apply Online
              </button>
              <button className="text-blue-500 font-medium">Know More</button>
            </div>
          </div>
          <div className="flex items-center justify-between mx-5 border-b border-gray-400">
            <div
              className="flex items-center bg-gray-200 h-full px-2"
              style={{ width: "70rem" }}
            >
              <h1 className="text-black font-semibold text-md">
                Application for issue of Pass books to the Sericulturists -
                Department of Sericulture
              </h1>
            </div>
            <div className="flex flex-col p-1 w-36 bg-gray-300">
              <button className="p-1 bg-blue-500 rounded-2xl">
                Apply Online
              </button>
              <button className="text-blue-500 font-medium">Know More</button>
            </div>
          </div>
          <div className="flex items-center justify-between mx-5 border-b border-gray-400">
            <div
              className="flex items-center bg-gray-300 h-full px-2"
              style={{ width: "70rem" }}
            >
              <h1 className="text-black font-semibold text-md">
                Application for issue of Subsidy to Reelers for Installation of
                Heat Recovery Units - Department of Sericulture
              </h1>
            </div>
            <div className="flex flex-col p-1 w-36 bg-gray-200">
              <button className="p-1 bg-blue-500 rounded-2xl">
                Apply Online
              </button>
              <button className="text-blue-500 font-medium">Know More</button>
            </div>
          </div>
          <div className="flex items-center justify-between mx-5 border-b border-gray-400">
            <div
              className="flex items-center bg-gray-200 h-full px-2"
              style={{ width: "70rem" }}
            >
              <h1 className="text-black font-semibold text-md">
                Application for Issue of Subsidy to Sericulturists for Drip
                Irrigation SC/ST and Others - Department of Sericulture
              </h1>
            </div>
            <div className="flex flex-col p-1 w-36 bg-gray-300">
              <button className="p-1 bg-blue-500 rounded-2xl">
                Apply Online
              </button>
              <button className="text-blue-500 font-medium">Know More</button>
            </div>
          </div>
          <div className="flex items-center justify-between mx-5 border-b border-gray-400">
            <div
              className="flex items-center bg-gray-300 h-full px-2"
              style={{ width: "70rem" }}
            >
              <h1 className="text-black font-semibold text-md">
                Application for issue of Subsidy to Reelers for Installation of
                Generators - Department of Sericulture
              </h1>
            </div>
            <div className="flex flex-col p-1 w-36 bg-gray-200">
              <button className="p-1 bg-blue-500 rounded-2xl">
                Apply Online
              </button>
              <button className="text-blue-500 font-medium">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
