import React from "react";

const Categories = () => {
  const categoryCards = [
    {
      title: "General",
      image: "https://media.umangapp.in/cdn/landing/category/general.jpg",
      key: 1,
    },
    {
      title: "Certificates",
      image: "https://media.umangapp.in/cdn/landing/category/certificates.jpg",
      key: 2,
    },
    {
      title: "Ration Card",
      image: "https://media.umangapp.in/cdn/landing/category/ration-card.jpg",
      key: 3,
    },
    {
      title: "Utility",
      image: "https://media.umangapp.in/cdn/landing/category/utility.jpg",
      key: 4,
    },
    {
      title: "Students",
      image: "https://media.umangapp.in/cdn/landing/category/students.jpg",
      key: 5,
    },
    {
      title: "Women",
      image: "https://media.umangapp.in/cdn/landing/category/women.jpg",
      key: 6,
    },
    {
      title: "Youth",
      image: "https://media.umangapp.in/cdn/landing/category/youth.jpg",
      key: 7,
    },
    {
      title: "Social Justice",
      image:
        "https://media.umangapp.in/cdn/landing/category/social-justice.jpg",
      key: 8,
    },
  ];

  return (
    <>
      <div className="mt-20 flex justify-center">
        <h1 className="font-bold text-4xl text-red-700">Categories</h1>
      </div>
      <div className="flex flex-wrap align-items items-center justify-evenly">
        {categoryCards.map((items) => (
          <div className="flex w-1/4 align-items items-center justify-center relative my-8">
            <div className="flex border-l-4 border-blue-800 w-72 bg-white absolute top-72">
              <h1 className="text-blue-800 font-semibold text-xl p-3">
                {items.title}
              </h1>
            </div>
            <div className="w-80">
              <img src={items.image} alt="school" className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
