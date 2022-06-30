import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const [file, setFile] = useState([]);
  const [reqDocuments, setReqDocuments] = useState([]);

  const serviceId = useLocation().pathname.split("/")[5];
  const userId = localStorage.getItem("CCPS-userID");

  const storeImageList = [];

  const storeImage = (e) => {
    e.preventDefault();
    storeImageList.push(e.target.files[0]);
  };

  const applyService = (e) => {
    e.preventDefault();
    console.log(storeImageList);
    setFile(storeImageList);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("userDocument", file[i]);
      if (i === file.length - 1) {
        axios
          .post(
            `http://localhost:8080/user/services/apply/${serviceId}/${userId}`,
            formData
          )
          .then((res) => {
            alert(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const getService = (serviceId) => {
    axios
      .get(`http://localhost:8080/user/services/view/apply/${serviceId}/`)
      .then((res) => {
        const servicesData = res.data.documents;
        const serviceList = [];
        servicesData.forEach((element) => {
          serviceList.push(element);
        });
        setReqDocuments(serviceList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getService(serviceId);
  }, []);

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        Services Title
      </h1>
      <div className="container m-auto flex flex-col items-center justify-center w-full border py-3">
        <h1 className="font-semibold bg-gray-200 p-2 border-b border-black text-xl mx-5 text-center">
          Fill Details Below
        </h1>
        <form className="flex flex-col items-center justify-center gap-5 font-semibold my-4">
          <div className="flex items-center justify-between gap-10">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="username"
              id="name"
              className="border p-1 rounded focus:outline-none focus:border-black border-gray-400 bg-gray-200"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <label htmlFor="name">Address:</label>
            <input
              type="text"
              name="username"
              id="name"
              className="border p-1 rounded focus:outline-none focus:border-black border-gray-400 bg-gray-200"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <label htmlFor="name">Aadhaar Number:</label>
            <input
              type="text"
              name="username"
              id="name"
              className="border p-1 rounded focus:outline-none focus:border-black border-gray-400 bg-gray-200"
              required
            />
          </div>
          {reqDocuments.map((element, index) => (
            <div
              className="flex items-center justify-between gap-2 ml-24"
              key={index}
            >
              <label htmlFor="userDocument">{element}</label>
              <input
                type="file"
                name="userDocument"
                id="userDocument"
                required
                onChange={(e) => storeImage(e)}
              />
            </div>
          ))}

          <button
            type="submit"
            className="border border-gray-400 px-2 py-1 rounded bg-gray-200 hover:text-white hover:bg-black focus:border-white focus:outline-white focus:shadow-outline"
            onClick={(e) => applyService(e)}
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default SingleService;
