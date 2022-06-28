import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const page = useLocation();
  const mainCategoryID = page.pathname.replace("/user/services/", "");

  const getSubCategories = () => {
    axios
      .get(`http://localhost:8080/user/services/${mainCategoryID}/`)
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

  const getService = (subCategoryID) => {
    axios
      .get(`http://localhost:8080/user/services/view/${subCategoryID}/`)
      .then((res) => {
        const servicesData = res.data;
        const serviceList = [];
        servicesData.forEach((element) => {
          serviceList.push(element);
        });
        setServices(serviceList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSubCategories();
  }, []);

  const findService = (id) => {
    getService(id);
  };

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        Farmer Welfare Services
      </h1>
      <div className="flex mx-20 my-10 gap-5">
        <div className="flex flex-col gap-2 w-1/3 border px-2 pt-2">
          {categories.map((items, index) => (
            <h1
              className="w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 hover:text-white hover:bg-blue-800 cursor-pointer"
              key={index}
              onClick={() => findService(items._id)}
            >
              {items.name}
            </h1>
          ))}
        </div>
        <div className="flex flex-col w-full border py-3">
          <h1 className="font-semibold bg-gray-200 p-2 border-b border-black text-xl mx-5">
            Services
          </h1>
          {services.map((items, index) => (
            <div
              className="flex items-center justify-between mx-5 border-b border-gray-400"
              key={index}
            >
              <div
                className={
                  index % 2
                    ? "flex items-center bg-gray-300 h-full px-2"
                    : "flex items-center bg-gray-100 h-full px-2"
                }
                style={{ width: "70rem" }}
              >
                <h1 className="text-black font-semibold text-md">
                  {items.name}
                </h1>
              </div>
              <div className="flex flex-col items-center jusfify-center p-1 w-36 bg-gray-200">
                <Link
                  to={page.pathname + "/apply/" + items._id}
                >
                  <button className="p-1 bg-blue-500 rounded-2xl">
                    Apply Online
                  </button>
                </Link>
                <button className="text-blue-500 font-medium">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleService;
