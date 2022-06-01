import React from "react";

const Schemes = () => {
  const schemes = [
    {
      key: 1,
      title: "Farmer Welfare",
      image:
        "https://jansoochna.rajasthan.gov.in/Images/Icon/Scheme/202009090659409757.png",
      borderColor: "border-yellow-400",
    },
    {
      key: 2,
      title: "Electricity and Municipal Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Power.png",
      borderColor: "border-pink-400",
    },
    {
      key: 3,
      title: "Housing related services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Urban.png",
      borderColor: "border-teal-400",
    },
    {
      key: 4,
      title: "Student educational services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      borderColor: "border-lime-400",
    },
    {
      key: 5,
      title: "Employement and Training",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/Job.png",
      borderColor: "border-cyan-400",
    },
    {
      key: 6,
      title: "Driving and Transport Services",
      image: "https://sevasindhu.karnataka.gov.in/Category/assets/img/bus.png",
      borderColor: "border-slate-400",
    },
    {
      key: 7,
      title: "Health and Drug related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Medical.png",
      borderColor: "border-red-400",
    },
    {
      key: 8,
      title: "Police and Security Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Police.png",
      borderColor: "border-orange-400",
    },
    {
      key: 9,
      title: "Birth, Death & Marriage related Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/marriage.png",
      borderColor: "border-sky-400",
    },
    {
      key: 10,
      title: "Women and Child Development",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      borderColor: "border-amber-400",
    },
    {
      key: 11,
      title: "Labour Welfare",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/labour.png",
      borderColor: "border-fuchsia-400",
    },
    {
      key: 12,
      title: "Citizen Services",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/citizen_new.png",
      borderColor: "border-green-400",
    },
  ];

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center pt-8">
        Schemes
      </h1>
      <div className="flex flex-wrap gap-3 justify-between mt-10 mx-10 pb-10">
        {schemes.map((scheme) => (
          <div
            className={`flex items-center justify-center gap-4 bg-white shadow-lg p-10 border-b-4 ${scheme.borderColor}`}
            style={{ width: "22rem" }}
          >
            <div className="w-24">
              <img
                src={scheme.image}
                alt={scheme.title}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-lg font-semibold">
              {scheme.key}.) {scheme.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Schemes;
