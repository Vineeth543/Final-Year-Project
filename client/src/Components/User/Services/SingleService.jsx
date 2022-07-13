import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const page = useLocation();
  const mainCategoryID = page.pathname.split("/")[3];

  const getService = (subCategoryID) => {
    axios
      .get(`http://localhost:8080/user/services/view/${subCategoryID}/`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getSubCategories = () => {
    axios
      .get(`http://localhost:8080/user/services/${mainCategoryID}/`)
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setSelectedId(res.data[0]._id);
          getService(res.data[0]._id);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getSubCategories();
  }, []);

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
      <h1 className="text-black font-bold text-4xl text-center m-5">
        {mainServiceCategory.map((category) => {
          if (category.id === mainCategoryID) return category.title;
          return null;
        })}
      </h1>
      <div className="flex mx-20 my-10 gap-5 h-96">
        <div className="flex flex-col gap-2 w-1/3 border p-2">
          {categories.map((items, index) => (
            <h1
              key={index}
              className={
                selectedId === items._id
                  ? "w-full text-white bg-blue-800 font-semibold font-lg rounded-xl p-2 cursor-pointer"
                  : "w-full text-black bg-gray-300 font-semibold font-lg rounded-xl p-2 cursor-pointer"
              }
              onClick={() => {
                setSelectedId(items._id);
                getService(items._id);
              }}
            >
              {items.name}
            </h1>
          ))}
        </div>
        <div className="flex flex-col w-full border py-3">
          {services.length > 0 ? (
            <>
              <h1 className="font-semibold bg-gray-200 p-2 border-b border-black text-xl mx-4">
                Services
              </h1>
              {services.map((items, index) => (
                <div
                  className="flex items-center justify-between mx-4 border-b border-gray-400"
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
                    <Link to={page.pathname + "/apply/" + items._id}>
                      <button className="p-1 bg-blue-500 rounded-2xl">
                        Apply Online
                      </button>
                    </Link>
                    <button className="text-blue-500 font-medium">
                      Know More
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h1 className="font-bold text-4xl text-center my-auto">
              No Services Available. ☹️
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleService;
