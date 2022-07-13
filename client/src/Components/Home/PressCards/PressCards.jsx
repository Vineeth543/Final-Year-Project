import React, { useState } from "react";
import { GoBook } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { BsFiles } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";

const PressCards = () => {
  const [card, setCard] = useState(0);

  const stateInfo1 = [
    {
      title: "Impact of Air Pollution on Health & Life",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/air.jpg",
      description:
        "To create awareness of rising air pollution and to mitigete its impact....",
      tag: "Air Pollution",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Smart Technologyis going to pave India",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Smart%20Technologies.jpg",
      description: "MoS, Science & Technology & Earth Sciences said,Smart...",
      tag: "Smart Technology",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "AI is a Kinetic enabler for growth of India..",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Artificial%20Intelligence.jpg",
      description:
        "Artificial Intelligence is a Kinetic enabler for growth of Indian technolo...",
      tag: "A.I",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "About 44 cr PMJDY beneficiary accounts linked with JAM.",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/PMJDY.jpg",
      description:
        "As of October 2021, about 44 crore Pradhan Mantri Jan Dhan Yojana accounts..",
      tag: "PMJDY",
      date: "Thu, 25 Apr, 2022",
    },
  ];

  const stateInfo2 = [
    {
      title: "Smart Technologyis going to pave India",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Smart%20Technologies.jpg",
      description: "MoS, Science & Technology & Earth Sciences said,Smart...",
      tag: "Smart Technology",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "AI is a Kinetic enabler for growth of India..",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Artificial%20Intelligence.jpg",
      description:
        "Artificial Intelligence is a Kinetic enabler for growth of Indian technolo...",
      tag: "A.I",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "About 44 cr PMJDY beneficiary accounts linked with JAM.",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/PMJDY.jpg",
      description:
        "As of October 2021, about 44 crore Pradhan Mantri Jan Dhan Yojana accounts..",
      tag: "PMJDY",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Impact of Air Pollution on Health & Life",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/air.jpg",
      description:
        "To create awareness of rising air pollution and to mitigete its impact....",
      tag: "Air Pollution",
      date: "Thu, 25 Apr, 2022",
    },
  ];

  const stateInfo3 = [
    {
      title: "AI is a Kinetic enabler for growth of India..",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Artificial%20Intelligence.jpg",
      description:
        "Artificial Intelligence is a Kinetic enabler for growth of Indian technolo...",
      tag: "A.I",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "About 44 cr PMJDY beneficiary accounts linked with JAM.",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/PMJDY.jpg",
      description:
        "As of October 2021, about 44 crore Pradhan Mantri Jan Dhan Yojana accounts..",
      tag: "PMJDY",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Impact of Air Pollution on Health & Life",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/air.jpg",
      description:
        "To create awareness of rising air pollution and to mitigete its impact....",
      tag: "Air Pollution",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Smart Technologyis going to pave India",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Smart%20Technologies.jpg",
      description: "MoS, Science & Technology & Earth Sciences said,Smart...",
      tag: "Smart Technology",
      date: "Thu, 25 Apr, 2022",
    },
  ];

  const stateInfo4 = [
    {
      title: "About 44 cr PMJDY beneficiary accounts linked with JAM.",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/PMJDY.jpg",
      description:
        "As of October 2021, about 44 crore Pradhan Mantri Jan Dhan Yojana accounts..",
      tag: "PMJDY",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Impact of Air Pollution on Health & Life",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/air.jpg",
      description:
        "To create awareness of rising air pollution and to mitigete its impact....",
      tag: "Air Pollution",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "Smart Technologyis going to pave India",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Smart%20Technologies.jpg",
      description: "MoS, Science & Technology & Earth Sciences said,Smart...",
      tag: "Smart Technology",
      date: "Thu, 25 Apr, 2022",
    },
    {
      title: "AI is a Kinetic enabler for growth of India..",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/Artificial%20Intelligence.jpg",
      description:
        "Artificial Intelligence is a Kinetic enabler for growth of Indian technolo...",
      tag: "A.I",
      date: "Thu, 25 Apr, 2022",
    },
  ];

  const cardMenu = [
    {
      icon: <GoBook className="w-full h-full" />,
      title: "Press Releases",
    },
    {
      icon: <BsFiles className="w-full h-full" />,
      title: "Press Coverage",
    },
    {
      icon: <ImBooks className="w-full h-full" />,
      title: "Publications",
    },
    {
      icon: <RiGalleryLine className="w-full h-full" />,
      title: "Gallery",
    },
  ];

  const pressReleases = () => {
    return (
      <>
        {stateInfo1.map((items, index) => (
          <div className="rounded-3xl relative shadow-xl w-96" key={index}>
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
                alt={items.tag}
                className="w-full h-full rounded-t-3xl"
              />
            </div>
            <div className="flex flex-col items-center m-2">
              <h1 className="text-2xl font-semibold text-orange-500">
                {items.title}
              </h1>
              <p className="text-gray-500">{items.date}</p>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  const pressCoverage = () => {
    return (
      <>
        {stateInfo2.map((items, index) => (
          <div className="rounded-3xl relative shadow-xl w-96" key={index}>
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
                alt={items.tag}
                className="w-full h-full rounded-t-3xl"
              />
            </div>
            <div className="flex flex-col items-center m-2">
              <h1 className="text-2xl font-semibold text-orange-500">
                {items.title}
              </h1>
              <p className="text-gray-500">{items.date}</p>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  const publications = () => {
    return (
      <>
        {stateInfo3.map((items, index) => (
          <div className="rounded-3xl relative shadow-xl w-96" key={index}>
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
                alt={items.tag}
                className="w-full h-full rounded-t-3xl"
              />
            </div>
            <div className="flex flex-col items-center m-2">
              <h1 className="text-2xl font-semibold text-orange-500">
                {items.title}
              </h1>
              <p className="text-gray-500">{items.date}</p>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  const gallery = () => {
    return (
      <>
        {stateInfo4.map((items, index) => (
          <div className="rounded-3xl relative shadow-xl w-96" key={index}>
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
                alt={items.tag}
                className="w-full h-full rounded-t-3xl"
              />
            </div>
            <div className="flex flex-col items-center m-2">
              <h1 className="text-2xl font-semibold text-orange-500">
                {items.title}
              </h1>
              <p className="text-gray-500">{items.date}</p>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container flex justify-center gap-40">
        {cardMenu.map((items, index) => (
          <div
            key={index}
            className={
              card === index
                ? "flex flex-col justify-center items-center p-2 w-36 cursor-pointer text-orange-500 shadow-2xl"
                : "flex flex-col justify-center items-center p-2 w-36 cursor-pointer shadow-md"
            }
            onClick={() => setCard(index)}
          >
            <div className="w-12 h-12">{items.icon}</div>
            <h1 className="font-semibold text-lg">{items.title}</h1>
          </div>
        ))}
      </div>
      <div className="border-b-4 border-orange-500 mx-32" />
      <div className="flex flex-wrap justify-center w-3/4 m-auto gap-14 gap-x-20">
        {card === 0 ? pressReleases() : null}
        {card === 1 ? pressCoverage() : null}
        {card === 2 ? publications() : null}
        {card === 3 ? gallery() : null}
      </div>
    </>
  );
};

export default PressCards;
