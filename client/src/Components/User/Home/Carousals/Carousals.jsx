import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./CarousalArrow";

const VillageCarousals = () => {
  const carousalImages = [
    "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/revised-crc-%20slide8.jpg",
    "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
    "https://www.cornellsathgurufoundation.org/wp-content/uploads/2020/02/Seed-Village-visit-scaled.jpg",
    "https://www.prajavani.net/sites/pv/files/article_images/2019/06/07/file75o8qd943so12h8zmzf1559915881.jpg",
    "https://www.inclusivebusiness.net/sites/default/files/wp/Agri1.jpg",
    "https://econeeds.org/projsliderbanner/261525761parsoda.jpg",
    "https://swachhamevajayate.org/wp-content/uploads/2020/02/Blog-3.jpeg",
    "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/swf_utility_folder/departments/pnrd_uneecopscloud_com_oid_9/slider/SDG.jpg",
  ];

  const settings = {
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {carousalImages.map((images, index) => (
          <div className="w-full px-2 pt-3 outline-none" key={index}>
            <img
              src={images}
              alt="carousalImages"
              className="w-full h-[35rem] rounded object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default VillageCarousals;
