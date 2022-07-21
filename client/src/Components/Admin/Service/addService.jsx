import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [documents, setDocuments] = useState("");

  const getSubCategory = (serviceID) => {
    axios
      .get(`http://localhost:8080/admin/services/add-service/${serviceID}`)
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const addNewService = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceDocuments = documents.split("\n");
    const newService = {
      serviceCategory: selectedSubCategory,
      name: serviceTitle,
      overview: overview,
      documents: serviceDocuments,
    };
    axios
      .post("http://localhost:8080/admin/services/add-service", newService)
      .then((res) => {
        alert(res.data);
        setLoading(false);
        // document.getElementById("add-service-form").reset();
      })
      .catch((err) => {
        alert(err);
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
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-bold text-2xl text-white bg-blue-700 shadow-2xl border-b-2 border-blue-900 p-5 mx-10">
            Add New Service
          </h1>
          <form
            className="flex flex-col p-5 gap-4 shadow-2xl bg-white mx-10"
            onSubmit={(e) => addNewService(e)}
            id="add-service-form"
          >
            <label htmlFor="mainCategory" className="text-xl font-medium pl-1">
              Category
            </label>
            <select
              name="mainCategory"
              id="mainCategory"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              onChange={(e) => getSubCategory(e.target.value)}
              defaultValue={"Select Main Category"}
              required
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
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              defaultValue={"Select Sub Category"}
              required
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
            <label htmlFor="serviceTitle" className="text-xl font-medium pl-1">
              Service Title
            </label>
            <input
              type="text"
              name="serviceTitle"
              id="serviceTitle"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setServiceTitle(e.target.value)}
            />
            <label
              htmlFor="serviceOverview"
              className="text-xl font-medium pl-1"
            >
              Overview
            </label>
            <input
              type="text"
              name="serviceOverview"
              id="serviceOverview"
              className="border-2 p-1 focus:border-blue-200 focus:outline-none rounded"
              required
              onChange={(e) => setOverview(e.target.value)}
            />
            <label htmlFor="serviceDocs" className="text-xl font-medium pl-1">
              Required Documents
            </label>
            <textarea
              rows="2"
              name="serviceDocs"
              id="serviceDocs"
              className="border-2 p-1 rounded focus:border-blue-200 focus:outline-none"
              onChange={(e) => setDocuments(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="p-2 font-semibold bg-blue-400 hover:bg-blue-700 hover:text-white focus:ring ring-blue-400"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default AddService;
