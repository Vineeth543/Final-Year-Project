import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const [reqDocuments, setReqDocuments] = useState([]);
  const [serviceTitle, setServiceTitle] = useState("");

  const serviceId = useLocation().pathname.split("/")[5];
  const userId = localStorage.getItem("CCPS-userID");

  const getRequiredDocuments = (serviceId) => {
    axios
      .get(`http://localhost:8080/user/services/view/apply/${serviceId}/`)
      .then((res) => {
        setReqDocuments(res.data.documents);
        setServiceTitle(res.data.name);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getRequiredDocuments(serviceId);
  }, []);

  const documentsList = [];

  const applyService = async (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to apply for this service?");
    const formData = new FormData();
    documentsList.forEach((file) => {
      formData.append("userDocument", file);
    });
    axios
      .post(
        `http://localhost:8080/user/services/apply/${serviceId}/${userId}`,
        formData
      )
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <h1 className="text-black font-bold text-4xl text-center m-5">
        {serviceTitle}
      </h1>
      <div className="container m-auto flex flex-col items-center justify-center w-full border py-3">
        <h1 className="w-full font-semibold bg-gray-200 p-2 border-b border-black text-2xl mx-5 text-center">
          Upload Documents
        </h1>
        <form
          className="flex flex-col gap-5 font-semibold my-4"
          onSubmit={(e) => applyService(e)}
        >
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
                onChange={async (e) => documentsList.push(e.target.files[0])}
              />
            </div>
          ))}

          <button
            type="submit"
            className="m-auto border border-gray-500 px-2 py-1 text-lg font-semibold bg-gray-200 rounded focus:ring ring-gray-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SingleService;
