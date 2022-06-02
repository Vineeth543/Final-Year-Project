import React from "react";

const StateInfo = () => {
  const stateInfo = [
    {
      title: "Dashboard",
      image: "https://state.bihar.gov.in/main/assets/img/dashboard_icon6.png",
      description:
        "7 Nishchay. Physical and Financial Progress of various Schemes run by Bihar Government.",
      color: "bg-amber-500",
      key: 5,
    },
    {
      title: "State Profile",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/istockphoto-1322454843-170667a.jpg",
      description:
        "Karnataka is located in the south part of the country. It is an entirely land–locked state.",
      color: "bg-sky-400",
      key: 1,
    },
    {
      title: "Governance Profile",
      image: "https://state.bihar.gov.in/main/assets/img/governance-img.jpg",
      description:
        "It is almost fifteen years ago when the people of Bihar handed over the reins of power to Nitish.",
      color: "bg-red-700",
      key: 2,
    },
    {
      title: "Facts and Figure",
      image: "https://state.bihar.gov.in/main/assets/img/facts.jpg",
      description:
        "Distribution of Population Decadal Growth Rate, Sex Ratio, Density and Literacy by State.",
      color: "bg-orange-500",
      key: 3,
    },
    {
      title: "Karnataka leads",
      image: "https://state.bihar.gov.in/main/assets/img/leading.jpg",
      description:
        "Distribution of Population Decadal Growth Rate, Sex Ratio, Density and Literacy by State.",
      color: "bg-green-500",
      key: 4,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          {/* <marquee style={{ color: "red", fontSize: "2em" }}>
            Karnataka local body polls: HC gives 12 weeks for delimitation,
            reservations
          </marquee> */}
        </div>
        <div className="flex align-items items-center justify-center gap-5 h-96">
          {stateInfo.map((items) => (
            <div className="bg-gray-200 h-96 rounded-3xl">
              <div
                className={`flex items-center justify-center ${items.color} w-full h-40 rounded-t-3xl`}
              >
                <img src={items.image} alt="karnataka" className="w-1/3" />
              </div>
              <div className="flex flex-col gap-4 mt-5 mx-5">
                <h1 className="text-2xl font-semibold">{items.title}</h1>
                <p>{items.description}</p>
                <button
                  className={`${items.color} rounded-md p-2 font-medium text-white`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StateInfo;
