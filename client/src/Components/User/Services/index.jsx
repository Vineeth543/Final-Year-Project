import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      key: 1,
      title: "Farmer Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Agriculture.png",
      bgColor: "bg-yellow-400",
    },
    {
      key: 2,
      title: "Electricity and Municipal Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Power.png",
      bgColor: "bg-pink-400",
    },
    {
      key: 3,
      title: "Housing related services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Urban.png",
      bgColor: "bg-teal-400",
    },
    {
      key: 4,
      title: "Student educational services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      bgColor: "bg-lime-400",
    },
    {
      key: 5,
      title: "Employement and Training",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/Job.png",
      bgColor: "bg-cyan-400",
    },
    {
      key: 6,
      title: "Driving and Transport Services",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/bus.png",
      bgColor: "bg-slate-400",
    },
    {
      key: 7,
      title: "Health and Drug related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Medical.png",
      bgColor: "bg-red-400",
    },
    {
      key: 8,
      title: "Police and Security Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Police.png",
      bgColor: "bg-orange-400",
    },
    {
      key: 9,
      title: "Birth, Death & Marriage related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/marriage.png",
      bgColor: "bg-sky-400",
    },
    {
      key: 10,
      title: "Women and Child Development",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      bgColor: "bg-amber-400",
    },
    {
      key: 11,
      title: "Labour Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/labour.png",
      bgColor: "bg-fuchsia-400",
    },
    {
      key: 12,
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
        {services.map((items) => (
          <Link to={`/user/services/${items.key}`}>
            <div className="flex gap-1 hover:shadow-2xl">
              <div className="w-32">
                <img
                  src={items.image}
                  alt={items.title}
                  className={`w-full ${items.bgColor}`}
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
