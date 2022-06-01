import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./CarousalArrow";

const VillageCarousals = () => {
  const carousalImages = [
    {
      link: "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/revised-crc-%20slide8.jpg",
      key: 1,
    },
    {
      link: "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
      key: 2,
    },
    {
      link: "https://www.cornellsathgurufoundation.org/wp-content/uploads/2020/02/Seed-Village-visit-scaled.jpg",
      key: 3,
    },
    {
      link: "https://www.prajavani.net/sites/pv/files/article_images/2019/06/07/file75o8qd943so12h8zmzf1559915881.jpg",
      key: 4,
    },
    {
      link: "https://www.inclusivebusiness.net/sites/default/files/wp/Agri1.jpg",
      key: 5,
    },
    {
      link: "https://econeeds.org/projsliderbanner/261525761parsoda.jpg",
      key: 6,
    },
    {
      link: "https://swachhamevajayate.org/wp-content/uploads/2020/02/Blog-3.jpeg",
      key: 7,
    },
    {
      link: "https://pnrd.assam.gov.in/sites/default/files/styles/76x84/public/swf_utility_folder/departments/pnrd_uneecopscloud_com_oid_9/slider/SDG.jpg",
      key: 8,
    },
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
        {carousalImages.map((images) => (
          <div className="w-full px-2 pt-3">
            <img
              src={images.link}
              alt="carousalImages"
              className="w-full rounded-md shadow-lg object-cover"
              style={{ height: "35rem" }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default VillageCarousals;
