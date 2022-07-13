import React from "react";

const StateInfo = () => {
  const stateInfo = [
    {
      title: "Dashboard",
      image: "https://state.bihar.gov.in/main/assets/img/dashboard_icon6.png",
      description:
        "7 Nishchay. Physical and Financial Progress of various Schemes run by Bihar Government.",
      color: "bg-amber-500",
      ring: "ring-amber-300",
    },
    {
      title: "State Profile",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/istockphoto-1322454843-170667a.jpg",
      description:
        "Karnataka is located in the south part of the country. It is an entirely land–locked state.",
      color: "bg-sky-400",
      ring: "ring-sky-300",
    },
    {
      title: "Governance Profile",
      image: "https://state.bihar.gov.in/main/assets/img/governance-img.jpg",
      description:
        "It is almost fifteen years ago when the people of Bihar handed over the reins of power to Nitish.",
      color: "bg-red-700",
      ring: "ring-red-300",
    },
    {
      title: "Facts and Figure",
      image: "https://state.bihar.gov.in/main/assets/img/facts.jpg",
      description:
        "Distribution of Population Decadal Growth Rate, Sex Ratio, Density and Literacy by State.",
      color: "bg-orange-500",
      ring: "ring-orange-300",
    },
    {
      title: "Karnataka leads",
      image: "https://state.bihar.gov.in/main/assets/img/leading.jpg",
      description:
        "Distribution of Population Decadal Growth Rate, Sex Ratio, Density and Literacy by State.",
      color: "bg-green-500",
      ring: "ring-green-300",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-red-700 text-center mt-2">
        About Karnataka
      </h1>
      <div className="flex gap-5">
        {stateInfo.map((items, index) => (
          <div className="bg-gray-100 h-96 rounded-3xl" key={index}>
            <div
              className={`flex items-center justify-center ${items.color} h-40 rounded-t-3xl`}
            >
              <img src={items.image} alt={items.title} className="w-1/3" />
            </div>
            <div className="flex flex-col gap-4 m-5">
              <h1 className="text-2xl font-semibold">{items.title}</h1>
              <p>{items.description}</p>
              <button
                className={`${items.color} rounded-md p-2 font-medium text-white focus:ring ${items.ring}`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StateInfo;
