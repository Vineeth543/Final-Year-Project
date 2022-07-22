import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const UserHomeJourney = () => {
  const years = [
    "2020",
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
  let [year, setYear] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1543181077-099f32f30a1c",
    "https://im.indiatimes.in/media/content/2017/Jul/7_1500977711.jpg",
    "https://images.unsplash.com/photo-1609252509229-364936a1d1a2",
    "https://i.pinimg.com/originals/f2/54/91/f25491ffe6e3f22aae9dbddce42dcbc7.jpg",
    "https://i0.wp.com/www.impriindia.com/wp-content/uploads/2021/01/Agriculture.jpg",
    "https://english.mathrubhumi.com/image/contentid/policy:1.5148592:1644582764/image.jpg",
    "https://c7.alamy.com/comp/GD4K81/manamadurai-village-GD4K81.jpg",
    "https://thumbs.dreamstime.com/z/rural-education-ngo-activities-teaching-young-indian-children-india-outdoors-temporary-classroom-boards-child-literacy-50806157.jpg",
    "https://c7.alamy.com/comp/2J69GCA/village-group-of-kids-in-uniform-with-using-laptop-while-sitting-on-near-paddy-field-concept-of-education-development-and-technology-2J69GCA.jpg",
    "https://rural.nic.in/sites/default/files/Attance%20PM%20Programme.jpg",
    "https://media.istockphoto.com/photos/solar-energy-in-daily-life-picture-id1361074867",
    "https://media.istockphoto.com/photos/focus-on-farmer-village-farmer-greeting-banker-by-hand-shake-at-in-picture-id1387788521",
  ];
  window.setInterval(function () {
    year < 11 ? year++ : (year = 0);
    setYear(year);
  }, 5000);

  return (
    <>
      <div className="bg-blue-900 h-[55rem]">
        <h2 className="text-5xl font-bold text-center text-white py-8">
          The Journey of The Village
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
              onClick={() => {
                year = index;
                setYear(year);
              }}
            >
              {item} <GoPrimitiveDot className="m-auto" />
            </h4>
          ))}
        </div>
        <div className="flex items-center justify-center w-[100rem] h-[40rem] my-10 mx-auto">
          <img
            src={images[year]}
            alt="yearImages"
            className="w-full h-full object-cove"
          />
        </div>
      </div>
    </>
  );
};

export default UserHomeJourney;
