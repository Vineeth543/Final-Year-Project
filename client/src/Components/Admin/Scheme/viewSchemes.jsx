import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const ViewSchemes = () => {
  const [loading, setLoading] = useState(true);
  const [schemesList, setSchemeList] = useState([]);
  const [isSchemeAvailable, setIsSchemeAvailable] = useState(false);
  const [schemeCategoryTitle, setSchemeCategoryTitleTitle] = useState("");

  const categoryId = useLocation().pathname.split("/")[4];

  const getShemeCategory = () => {
    axios
      .get(`http://localhost:8080/official/schemes/category/${categoryId}`)
      .then((res) => {
        setSchemeCategoryTitleTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getSchemeData = () => {
    axios
      .get(
        `http://localhost:8080/official/schemes/category/scheme/${categoryId}`
      )
      .then((res) => {
        if (res.data !== []) {
          setSchemeList(res.data);
          setIsSchemeAvailable(res.data[0]);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getSchemeData();
    getShemeCategory();
  }, []);

  const deleteScheme = (schemeId) => {
    if (window.confirm("Are you sure you want to delete this scheme?")) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/official/schemes/delete/${schemeId}`)
        .then((res) => {
          alert(res.data);
          getSchemeData();
          getShemeCategory();
        })
        .catch((err) => {
          alert(err);
        });
    }
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
          <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
            {schemeCategoryTitle}
          </h1>
          {schemesList != null && isSchemeAvailable ? (
            <table className="content-table dashboard">
              <thead>
                <tr>
                  <th className="text-center">SL.NO</th>
                  <th className="text-center">Scheme</th>
                  <th className="text-center">Objective</th>
                  <th className="text-center">Benefits</th>
                  <th className="text-center">Eligibility</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {schemesList.map((items, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{items.title}</td>
                    <td className="text-center">
                      {items.objective.length > 60
                        ? items.objective.substring(0, 60) + "..."
                        : items.objective}
                    </td>
                    <td className="text-center">
                      {items.benefits.map((benefit, index) => (
                        <span key={index} className="flex justify-center">
                          {index + 1}){" "}
                          {benefit.length > 40
                            ? benefit.substring(0, 40) + "..."
                            : benefit}
                        </span>
                      ))}
                    </td>
                    <td className="text-center">
                      {items.eligibility.map((benefit, index) => (
                        <span key={index} className="flex justify-center">
                          {index + 1}){" "}
                          {benefit.length > 40
                            ? benefit.substring(0, 40) + "..."
                            : benefit}
                        </span>
                      ))}
                    </td>
                    <td className="text-center">
                      <button
                        className="bg-red-500 px-2 rounded text-white"
                        onClick={() => deleteScheme(items._id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="font-bold text-4xl text-center my-20">
              No Schemes Found. ☹️
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default ViewSchemes;
