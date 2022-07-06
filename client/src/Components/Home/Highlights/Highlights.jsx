import React from "react";
import Slider from "react-slick";

const Highlights = () => {
  const highlightCarousal = [
    {
      title: "Intellectual Property Facilitation Centre",
      description:
        "Intellectual Property Facilitation Centre has been established with the prime objective to boost Intellectual Property (IP) culture in MSMEs by guiding and assisting them in the identification, protection, and management of Intellectual property rights (IPRs). IPFC provides cost-effective, hassle-free, and timely IP-related services to make IP protection easier and affordable. We are also taking the services of external consultants in this field.",
      image: "https://www.assocham.org/assets/images/INITIATIVE_IPR.jpg",
    },
    {
      title: "Intellectual Property Facilitation Centre",
      description:
        "Intellectual Property Facilitation Centre has been established with the prime objective to boost Intellectual Property (IP) culture in MSMEs by guiding and assisting them in the identification, protection, and management of Intellectual property rights (IPRs). IPFC provides cost-effective, hassle-free, and timely IP-related services to make IP protection easier and affordable. We are also taking the services of external consultants in this field.",
      image: "https://www.assocham.org/assets/images/INITIATIVE_Gem.jpg",
    },
    {
      title: "Intellectual Property Facilitation Centre",
      description:
        "Intellectual Property Facilitation Centre has been established with the prime objective to boost Intellectual Property (IP) culture in MSMEs by guiding and assisting them in the identification, protection, and management of Intellectual property rights (IPRs). IPFC provides cost-effective, hassle-free, and timely IP-related services to make IP protection easier and affordable. We are also taking the services of external consultants in this field.",
      image: "https://www.assocham.org/assets/images/well-new-add.jpg",
    },
    {
      title: "Intellectual Property Facilitation Centre",
      description:
        "Intellectual Property Facilitation Centre has been established with the prime objective to boost Intellectual Property (IP) culture in MSMEs by guiding and assisting them in the identification, protection, and management of Intellectual property rights (IPRs). IPFC provides cost-effective, hassle-free, and timely IP-related services to make IP protection easier and affordable. We are also taking the services of external consultants in this field.",
      image:
        "https://www.assocham.org/assets/images/banner/sector-cover/shipping.jpg",
    },
    {
      title: "Intellectual Property Facilitation Centre",
      description:
        "Intellectual Property Facilitation Centre has been established with the prime objective to boost Intellectual Property (IP) culture in MSMEs by guiding and assisting them in the identification, protection, and management of Intellectual property rights (IPRs). IPFC provides cost-effective, hassle-free, and timely IP-related services to make IP protection easier and affordable. We are also taking the services of external consultants in this field.",
      image:
        "https://www.assocham.org/assets/images/banner/sector-cover/food-processing-value-addition-sector-cover.jpg",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1 className="flex align-items items-center justify-center font-bold text-4xl text-red-700">
        Highligts
      </h1>
      <Slider {...settings}>
        {highlightCarousal.map((highlight, index) => (
          <div
            className="flex flex-col align-items items-center justify-center"
            key={index}
          >
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col gap-5 w-1/2">
                <h1 className="font-medium text-2xl">{highlight.title}</h1>
                <p>{highlight.description}</p>
              </div>
              <div className="flex align-items items-center justify-center w-1/2 h-96 relative">
                <div
                  className="w-96 h-72 border-2 border-blue-900 absolute top-20 left-56 shadow-lg"
                  style={{ borderRadius: "110px 0px" }}
                ></div>
                <div className="w-96 h-72 absolute">
                  <img
                    src={highlight.image}
                    alt="highlight"
                    className="h-full w-full shadow-2xl"
                    style={{ borderRadius: "110px 0px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Highlights;
