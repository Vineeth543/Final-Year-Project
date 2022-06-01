import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./CarousalArrow";

const Carousals = () => {
  const carousalImages = [
    {
      link: "https://image3.mouthshut.com/images/imagesp/925769443s.jpg",
      key: 1,
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg",
      key: 2,
    },
    {
      link: "https://images.unsplash.com/photo-1553679813-b437b57c08f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaW1vZ2F8ZW58MHx8MHx8&w=1000&q=80",
      key: 3,
    },
    {
      link: "https://i.ytimg.com/vi/oT4Lf807_P0/maxresdefault.jpg",
      key: 4,
    },
    {
      link: "https://www.karnataka.gov.in/storage/slids/1638784672.jpg",
      key: 5,
    },
    {
      link: "https://www.karnataka.gov.in/storage/slids/1638784483.jpg",
      key: 6,
    },
    {
      link: "https://punjab.gov.in/wp-content/uploads/2020/04/website-banner-DGR.png",
      key: 7,
    },
  ];

  const settings = {
    arrows: true,
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

export default Carousals;
