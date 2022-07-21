import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const UserHomeJourney = () => {
  const years = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];
  const [year, setYear] = useState(0);
  const images = [
    "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/revised-crc-%20slide8.jpg",
    "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
    "https://www.cornellsathgurufoundation.org/wp-content/uploads/2020/02/Seed-Village-visit-scaled.jpg",
    "https://www.prajavani.net/sites/pv/files/article_images/2019/06/07/file75o8qd943so12h8zmzf1559915881.jpg",
    "https://www.inclusivebusiness.net/sites/default/files/wp/Agri1.jpg",
    "https://econeeds.org/projsliderbanner/261525761parsoda.jpg",
    "https://swachhamevajayate.org/wp-content/uploads/2020/02/Blog-3.jpeg",
    "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/swf_utility_folder/departments/pnrd_uneecopscloud_com_oid_9/slider/SDG.jpg",
    "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/revised-crc-%20slide8.jpg",
    "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
    "https://www.cornellsathgurufoundation.org/wp-content/uploads/2020/02/Seed-Village-visit-scaled.jpg",
  ];

  return (
    <>
      <div className="bg-blue-900 h-[45rem]">
        <h2 className="text-4xl font-bold text-center text-white py-8">
          The Journey
        </h2>
        <div className="flex items-center justify-around">
          {years.map((item, index) => (
            <h4
              key={index}
              className={
                year === index
                  ? "text-xl font-semibold text-orange-600 cursor-pointer"
                  : "text-xl font-semibold text-blue-400 cursor-pointer"
              }
              onClick={() => setYear(index)}
            >
              {item} <GoPrimitiveDot className="m-auto" />
            </h4>
          ))}
        </div>
        <div className="flex items-center justify-around h-[30rem] my-10">
          <img
            src={images[year]}
            alt="yearImages"
            className="h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default UserHomeJourney;
