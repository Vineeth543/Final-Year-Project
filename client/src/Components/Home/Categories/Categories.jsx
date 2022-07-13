import React from "react";

const Categories = () => {
  const categoryCards = [
    {
      title: "General",
      image: "https://media.umangapp.in/cdn/landing/category/general.jpg",
    },
    {
      title: "Certificates",
      image: "https://media.umangapp.in/cdn/landing/category/certificates.jpg",
    },
    {
      title: "Ration Card",
      image: "https://media.umangapp.in/cdn/landing/category/ration-card.jpg",
    },
    {
      title: "Utility",
      image: "https://media.umangapp.in/cdn/landing/category/utility.jpg",
    },
    {
      title: "Students",
      image: "https://media.umangapp.in/cdn/landing/category/students.jpg",
    },
    {
      title: "Women",
      image: "https://media.umangapp.in/cdn/landing/category/women.jpg",
    },
    {
      title: "Youth",
      image: "https://media.umangapp.in/cdn/landing/category/youth.jpg",
    },
    {
      title: "Social Justice",
      image:
        "https://media.umangapp.in/cdn/landing/category/social-justice.jpg",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-red-700 text-center mt-2">
        Categories
      </h1>
      <div className="flex flex-wrap gap-14 justify-center">
        {categoryCards.map((items, index) => (
          <div className="flex justify-center relative" key={index}>
            <div className="flex border-l-4 border-blue-800 w-72 bg-white absolute top-72">
              <h1 className="text-blue-800 font-semibold text-xl p-3">
                {items.title}
              </h1>
            </div>
            <div className="w-80">
              <img src={items.image} alt={items.title} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
