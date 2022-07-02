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
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 mx-12 text-white">
        {mainServiceCategory.map((category) => {
          if (category.id === serviceID) return category.title;
          return null;
        })}
      </h1>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center">SL.NO</th>
            <th className="text-center">Services</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((items, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <Link to={`${items._id}`}>{items.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminViewServices;
