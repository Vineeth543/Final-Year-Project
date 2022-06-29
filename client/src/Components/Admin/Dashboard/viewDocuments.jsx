import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewDocuments = () => {
  const [documents, setDocuments] = useState();

  const pastEvent = [
    {
      key: 1,
      title: "Mann Ki Baat",
      location: "Radio",
      image:
        "https://resize.indiatvnews.com/en/resize/oldbucket/715_-/businessindia/Aadhaar-card-se5640.jpg",
      date: "28 May, 2022",
    },
  ];

  const appliedServiceId = useLocation().pathname.split("/")[4];

  const getDocuments = () => {
    axios
      .get(
        `http://localhost:8080/admin/dashboard/appliedServices/documents/${appliedServiceId}`
      )
      .then((res) => {
        const userDocumentsList = [];
        res.data.userDocuments.forEach((element) => {
          userDocumentsList.push(element);
        });
        setDocuments(userDocumentsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>
      <div className="flex m-10">
        <div className="flex flex-wrap gap-8 bg-white p-2 justify-center">
          {documents.map((link) => (
            <div className="flex flex-col bg-lime-100 hover:shadow-2xl border-2 border-lime-400 p-4">
              <div className="w-96">
                <img src={link} alt={link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewDocuments;
