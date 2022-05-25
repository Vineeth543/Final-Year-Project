import React from "react";
import { GoBook } from "react-icons/go";
import { GrMultiple, GrGallery } from "react-icons/gr";
import { ImBooks } from "react-icons/im";

const PressCards = () => {
  const stateInfo = [
    {
      title: "Impact of Air Pollution on Health & Life",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/air.jpg",
      description:
        "To create awareness of rising air pollution and to mitigete its impact....",
      tag: "Air Pollution",
      date: "Thu, 25 Apr, 2022",
      key: 1,
    },
    {
      title: "Smart Technologyis going to pave India",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/Smart%20Technologies.jpg",
      description: "MoS, Science & Technology & Earth Sciences said,Smart...",
      tag: "Smart Technology",
      date: "Thu, 25 Apr, 2022",
      key: 2,
    },
    {
      title: "AI is a Kinetic enabler for growth of India..",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/Artificial%20Intelligence.jpg",
      description:
        "Artificial Intelligence is a Kinetic enabler for growth of Indian technolo...",
      tag: "A.I",
      date: "Thu, 25 Apr, 2022",
      key: 3,
    },
    {
      title: "About 44 cr PMJDY beneficiary accounts linked with JAM.",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/PMJDY.jpg",
      description:
        "As of October 2021, about 44 crore Pradhan Mantri Jan Dhan Yojana accounts..",
      tag: "PMJDY",
      date: "Thu, 25 Apr, 2022",
      key: 4,
    },
  ];

  return (
    <>
      <div className="mt-10">
        <div className="flex items-center justify-between m-5 mx-64">
          <div className="flex flex-col justify-center items-center p-2 shadow-2xl w-36 text-orange-500">
            <div className="w-12 h-12">
              <GoBook className="w-full h-full" />
            </div>
            <h1 className="font-semibold text-lg">Press Release</h1>
          </div>
          <div className="flex flex-col justify-center items-center p-2 shadow-2xl w-36">
            <div className="w-12 h-12">
              <GrMultiple className="w-full h-full" />
            </div>
            <h1 className="font-semibold text-lg">Press Coverage</h1>
          </div>
          <div className="flex flex-col justify-center items-center p-2 shadow-2xl w-36">
            <div className="w-12 h-12">
              <ImBooks className="w-full h-full" />
            </div>
            <h1 className="font-semibold text-lg">Publications</h1>
          </div>
          <div className="flex flex-col justify-center items-center p-2 shadow-2xl w-36">
            <div className="w-12 h-12">
              <GrGallery className="w-full h-full" />
            </div>
            <h1 className="font-semibold text-lg">Gallery</h1>
          </div>
        </div>
        <div className="border-b-4 border-orange-500 mx-44" />
        <div className="flex align-items items-center  my-5 mx-44">
          <div className="flex flex-col align-items items-center my-10 ">
            <div
              className="flex flex-wrap justify-center gap-10"
              style={{ height: "30rem" }}
            >
              {stateInfo.map((items) => (
                <div className="bg-white rounded-3xl relative shadow-xl w-96">
                  <div
                    className="bg-red-600 absolute w-64 h-12 left-0"
                    style={{ top: "15rem" }}
                  />
                  <h1
                    className="text-2xl font-semibold absolute left-0 px-1 text-white"
                    style={{ top: "15.4rem" }}
                  >
                    {items.tag}
                  </h1>
                  <div className="w-full h-72 rounded-t-3xl">
                    <img
                      src={items.image}
                      alt="karnataka"
                      className="w-full h-full rounded-t-3xl"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center m-2">
                    <h1 className="text-2xl font-semibold text-orange-500">
                      {items.title}
                    </h1>
                    <p className="text-gray-500">{items.date}</p>
                    <p className="flex flex-col align-items items-center justify-center">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressCards;
