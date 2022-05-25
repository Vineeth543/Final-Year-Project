import React from "react";

const TreasureCards = () => {
  const stateInfo = [
    {
      title: "Tourism",
      image:
        "https://www.clubmahindra.com/blog/media/section_images/coverimage-f846b10831cf739.jpg",
      description:
        "Karnataka has the largest number of almost fifteen years ago when tribes as many as 62.",
      color: "bg-sky-600",
      hover: "hover:bg-sky-600",
      key: 1,
    },
    {
      title: "Mines and Minerals",
      image:
        "https://sabrangindia.in/sites/default/files/field/image/coal_mine0.jpg",
      description:
        "Karnataka has the largest number of almost fifteen years ago when tribes as many as 62.",
      color: "bg-red-600",
      hover: "hover:bg-red-600",
      key: 2,
    },
    {
      title: "Tribal Culture",
      image:
        "https://www.deccanherald.com/sites/dh/files/article_images/2017/04/07/605166.jpg",
      description:
        "Karnataka has the largest number of almost fifteen years ago when tribes as many as 62.",
      color: "bg-orange-600",
      hover: "hover:bg-orange-600",
      key: 3,
    },
  ];

  return (
    <>
      <div className="mt-20 flex justify-center">
        <h1 className="font-bold text-4xl text-red-700">
          Treasures of Karnataka
        </h1>
      </div>
      <div className="flex flex-col justify-center m-10">
        <div
          className="flex align-items items-center justify-center gap-5"
          style={{ height: "30rem" }}
        >
          {stateInfo.map((items) => (
            <div
              className={`bg-white w-1/3 rounded-3xl bg-gray-100 relative ${items.hover}`}
            >
              <div
                className={`${items.color} absolute rounded-tl-full w-12 h-12 bottom-0 right-0 rounded-br-3xl`}
              />
              <div className="w-full h-72 rounded-t-3xl">
                <img
                  src={items.image}
                  alt="karnataka"
                  className="w-full h-full rounded-t-3xl"
                />
              </div>
              <div className="flex flex-col gap-4 m-5">
                <h1 className="text-2xl font-semibold">{items.title}</h1>
                <p>{items.description}</p>
                <button className="font-medium text-black flex">
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

export default TreasureCards;
