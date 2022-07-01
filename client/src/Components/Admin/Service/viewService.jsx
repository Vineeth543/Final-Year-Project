import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminViewServices = () => {
  const [categories, setCategories] = useState([]);
  const page = useLocation();
  const serviceID = page.pathname.replace("/admin/services/view/", "");

  const getCategory = () => {
    axios
      .get(`http://localhost:8080/user/services/${serviceID}/`)
      .then((res) => {
        const Categories = res.data;
        const subCategory = [];
        Categories.forEach((element) => {
          subCategory.push(element);
        });
        setCategories(subCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  });

  const mainServiceCategory = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity Services",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related services",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational services",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport Services",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related Services",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security Services",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related Services",
    },
    {
      id: "62b87d07be83ec8f10283777",
      title: "Women and Child Development",
    },
    {
      id: "62b87c49be83ec8f1028376d",
      title: "Labour Welfare",
    },
    {
      id: "62b87d21be83ec8f10283779",
      title: "Citizen Services",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-semibold text-4xl text-gray-700 text-center">
            {mainServiceCategory.map((category) => {
              if (category.id === serviceID) return category.title;
              return null;
            })}
          </h1>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80 text-gray-700">Sl.No</h1>
          <h1 className="font-semibold text-xl text-gray-700">Services</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {categories.map((items, index) => (
            <div
              className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{index + 1}</h1>
                  <Link to={`${items._id}`}>
                    <h1 className="font-semibold text-xl cursor-pointer">
                      {items.name}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminViewServices;
