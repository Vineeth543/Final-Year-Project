import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewDocuments = () => {
  const [documents, setDocuments] = useState();
  const [documentsTitle, setDocumentsTitle] = useState([]);
  const [seviceName, setServiceName] = useState([]);
  const appliedServiceId = useLocation().pathname.split("/")[4];

  const getRequiredDocuments = (serviceId) => {
    axios
      .get(`http://localhost:8080/user/services/view/apply/${serviceId}/`)
      .then((res) => {
        console.log(res.data);
        setDocumentsTitle(res.data.documents);
        setServiceName(res.data.name);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getDocuments = () => {
    axios
      .get(
        `http://localhost:8080/admin/dashboard/appliedServices/documents/${appliedServiceId}`
      )
      .then((res) => {
        console.log(res.data);
        getRequiredDocuments(res.data.service);
        setDocuments(res.data.userDocuments);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center p-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
        Documents submitted for - {seviceName}
      </h1>
      <div className="flex flex-wrap gap-8 justify-center mx-12">
        {documents &&
          documents.map((link, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="w-96 h-96 border border-black hover:shadow-2xl cursor-pointer">
                <img
                  src={link}
                  alt={documentsTitle[index]}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-semibold text-lg">{documentsTitle[index]}</h2>
            </div>
          ))}
      </div>
    </>
  );
};

export default ViewDocuments;
