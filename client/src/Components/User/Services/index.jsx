import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Agriculture.png",
      bgColor: "bg-yellow-400",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Power.png",
      bgColor: "bg-pink-400",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Urban.png",
      bgColor: "bg-teal-400",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      bgColor: "bg-lime-400",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/Job.png",
      bgColor: "bg-cyan-400",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport Services",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/bus.png",
      bgColor: "bg-slate-400",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Medical.png",
      bgColor: "bg-red-400",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Police.png",
      bgColor: "bg-orange-400",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/marriage.png",
      bgColor: "bg-sky-400",
    },
    {
      id: "62b87d07be83ec8f10283777",
      title: "Women and Child Development",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      bgColor: "bg-amber-400",
    },
    {
      id: "62b87c49be83ec8f1028376d",
      title: "Labour Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/labour.png",
      bgColor: "bg-fuchsia-400",
    },
    {
      id: "62b87d21be83ec8f10283779",
      title: "Citizen Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/citizen_new.png",
      bgColor: "bg-green-400",
    },
  ];

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center pt-8">
        e-Services
      </h1>
      <div className="flex flex-wrap gap-10 justify-between mx-32 mt-10">
        {services.map((items, index) => (
          <Link to={`/user/services/${items.id}`} key={index}>
            <div className="flex gap-1 hover:shadow-2xl">
              <div className="w-32">
                <img
                  src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg"
                  alt={items.title}
                  className={`w-full ${items.bgColor} object-cover`}
                />
              </div>
              <div
                className={`flex justify-center items-center w-96 ${items.bgColor}`}
              >
                <h1 className="text-black font-semibold text-xl">
                  {items.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Services;
