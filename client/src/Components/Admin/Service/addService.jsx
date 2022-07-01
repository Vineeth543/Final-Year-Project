import React, { useState } from "react";
import axios from "axios";

const AddService = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [documents, setDocuments] = useState([]);

  const getSubCategory = (serviceID) => {
    axios
      .get(`http://localhost:8080/admin/services/add-service/${serviceID}`)
      .then((res) => {
        const Categories = res.data;
        const subCategory = [];
        Categories.forEach((element) => {
          subCategory.push(element);
        });
        setSubCategories(subCategory);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const covertTextToArray = (text) => {
    const doumentList = text.split(",");
    setDocuments(doumentList);
  };

  const resetValues = () => {
    setSubCategories([]);
    setSelectedSubCategory("");
    setServiceTitle("");
    setOverview("");
    setDocuments([]);
  };

  const addNewService = (e) => {
    e.preventDefault();

    const newService = {
      serviceCategory: selectedSubCategory,
      name: serviceTitle,
      overview: overview,
      documents: documents,
    };

    axios
      .post("http://localhost:8080/admin/services/add-service", newService)
      .then((res) => {
        alert(res.data);
        resetValues();
      })
      .catch((err) => {
        alert(err.data);
        resetValues();
      });
  };

  const mainCategory = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity items",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related items",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational items",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport items",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related items",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security items",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related items",
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
      title: "Citizen items",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 rounded">
        <div className="flex flex-col p-5 gap-5 bg-gray-100 w-full shadow-xl border-b-2">
          <h1 className="font-bold text-2xl">Add New Service</h1>
        </div>
        <div className="flex flex-col shadow-xl bg-white">
          <form
            className="flex flex-col px-5 py-3 gap-4"
            onSubmit={(e) => addNewService(e)}
          >
            <label htmlFor="mainCategory" className="text-xl font-medium pl-1">
              Category
            </label>
            <select
              name="mainCategory"
              id="mainCategory"
              className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => getSubCategory(e.target.value)}
              defaultValue={"Select Main Category"}
            >
              <option value="Select Main Category" disabled>
                Select Main Category
              </option>
              {mainCategory.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <label htmlFor="subCategory" className="text-xl font-medium pl-1">
              Sub Category
            </label>
            <select
              name="subCategory"
              id="subCategory"
              className="outline-none border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              defaultValue={"Select Sub Category"}
            >
              <option value="Select Sub Category" disabled>
                Select Sub Category
              </option>
              {subCategories.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label htmlFor="itemTitle" className="text-xl font-medium pl-1">
              Service Title
            </label>
            <input
              type="text"
              name="itemTitle"
              id="itemTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setServiceTitle(e.target.value)}
            />
            <label htmlFor="itemTitle" className="text-xl font-medium pl-1">
              Overview
            </label>
            <input
              type="text"
              name="itemTitle"
              id="itemTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setOverview(e.target.value)}
            />
            <label htmlFor="itemTitle" className="text-xl font-medium pl-1">
              Required Documents
            </label>
            <input
              type="text"
              name="documents"
              id="documents"
              className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
              onChange={(e) => covertTextToArray(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 text-lg font-semibold bg-blue-600 w-full focus:ring ring-blue-300 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
