import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./CarousalArrow";

const Carousals = () => {
  const carousalImages = [
    "https://image3.mouthshut.com/images/imagesp/925769443s.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg",
    "https://images.unsplash.com/photo-1553679813-b437b57c08f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaW1vZ2F8ZW58MHx8MHx8&w=1000&q=80",
    "https://i.ytimg.com/vi/oT4Lf807_P0/maxresdefault.jpg",
    "https://www.karnataka.gov.in/storage/slids/1638784672.jpg",
    "https://www.karnataka.gov.in/storage/slids/1638784483.jpg",
    "https://punjab.gov.in/wp-content/uploads/2020/04/website-banner-DGR.png",
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
          <div className="w-full py-3 px-1 outline-none" key={index}>
            <img
              src={images}
              alt="carousalImages"
              className="w-full rounded-md object-cover"
              style={{ height: "35rem" }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousals;
