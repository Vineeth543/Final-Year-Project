import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewDocuments = () => {
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState();
  const [seviceName, setServiceName] = useState([]);
  const [documentsTitle, setDocumentsTitle] = useState([]);
  const appliedServiceId = useLocation().pathname.split("/")[4];

  const getRequiredDocuments = (serviceId) => {
    axios
      .get(`http://localhost:8080/user/services/view/apply/${serviceId}/`)
      .then((res) => {
        setDocumentsTitle(res.data.documents);
        setServiceName(res.data.name);
        setLoading(false);
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

  const poupImageContainer = document.getElementById("poupImageContainer");
  const [popupImage, setPopupImage] = useState("");

  const showModal = (e) => {
    setPopupImage(e.target.src);
    poupImageContainer.style.display = "block";
  };

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
          <h1 className="font-bold text-4xl text-white text-center p-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12">
            Documents submitted for - {seviceName}
          </h1>
          <div className="flex flex-wrap gap-8 justify-center mx-12">
            {documents &&
              documents.map((link, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="w-96 h-96 border border-black hover:shadow-2xl cursor-pointer">
                    {link.includes(".pdf") ? (
                      <iframe
                        src={link}
                        title={documentsTitle[index]}
                        frameBorder="0"
                        scrolling="auto"
                        alt={documentsTitle[index]}
                        className="w-full h-full"
                        onClick={(e) => showModal(e)}
                      ></iframe>
                    ) : (
                      <img
                        src={link}
                        alt={documentsTitle[index]}
                        className="w-full h-full object-cover"
                        onClick={(e) => showModal(e)}
                      />
                    )}
                  </div>
                  <h2 className="font-semibold text-lg">
                    {documentsTitle[index]}
                  </h2>
                </div>
              ))}
          </div>
          <div
            id="poupImageContainer"
            className="overflow-scroll border-8 border-blue-600"
            style={{
              minWidth: "80%",
              maxHeight: "90%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "none",
            }}
          >
            <div className="sticky top-0 flex items-center justify-between">
              <h1 className="w-full text-center bg-white font-semibold ">
                {popupImage !== ""
                  ? documentsTitle[documents.indexOf(popupImage)]
                  : null}
              </h1>
              <button
                onClick={(e) => (poupImageContainer.style.display = "none")}
                className="px-4 bg-red-500 text-white font-bold"
              >
                X
              </button>
            </div>
            <img
              id="popupImage"
              src={popupImage}
              alt={popupImage}
              className="w-full h-full object-cover cursor-all-scroll"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ViewDocuments;
