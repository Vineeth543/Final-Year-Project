import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ViewSchemes = () => {
  const [active, setActive] = useState(true);

  const page = useLocation();
  const schemeID = page.pathname.split("/")[4];

  const initiateDelete = (e) => {
    e.preventDefault();
    alert("Scheme Deleted.");
  };

  const Schemes = [
    {
      id: "child",
      title: "Schemes for Child Welfare",
    },
    {
      id: "poor",
      title: "Schemes for Unemployed and Poor",
    },
    {
      id: "academy",
      title: "Schemes for Academicians",
    },
    {
      id: "aatma",
      title: "Aatma Nirbhar Bharat Abhiyaan",
    },
    {
      id: "farmer",
      title: "Schemes for Farmers",
    },
    {
      id: "senior",
      title: "Schemes for Senior Citizens",
    },
    {
      id: "student",
      title: "Schemes for Students",
    },
    {
      id: "anganwadi",
      title: "Schemes for Anganwadi workers",
    },
    {
      id: "entrepreneur",
      title: "Schemes for Entrepreneurs",
    },
    {
      id: "women",
      title: "Schemes for Women",
    },
    {
      id: "mgnarega",
      title: "MGNAREGA",
    },
    {
      id: "skill",
      title: "Skill Development",
    },
  ];

  const [schemesList] = useState([
    "Atal Pension Yojana",
    "Ayushman Bharat",
    "Prime Minister Awaas Yojana - Gramin",
    "SMILE Scheme for Support for Marginalised Individuals for Livelihood and Enterprise",
    "Social security relief to dependents of workers passing away due to COVID-19",
    "Support for Marginalized Individuals for Livelihood and Enterprise",
    "SUdiyaman Swanirbhar Karmasansthan Prakalpa (USKP)",
  ]);

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
        {Schemes.map((scheme) => {
          if (scheme.id === schemeID) return scheme.title;
          else return null;
        })}
      </h1>
      {schemesList.length > 0 ? (
        <table className="content-table dashboard">
          <thead>
            <tr>
              <th className="text-center">SL.NO</th>
              <th className="text-center">Scheme Name</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schemesList.map((items, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{items}</td>
                <td className="flex items-center justify-center gap-5">
                  <button
                    className={`bg-green-500 px-2 rounded text-white ${
                      !active && "bg-gray-500"
                    } `}
                    onClick={() => setActive(!active)}
                  >
                    {`${active ? "ACTIVE" : "DEACTIVE"} `}
                  </button>
                  <button
                    className="bg-red-500 px-2 rounded text-white"
                    onClick={(e) => initiateDelete(e)}
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
  );
};

export default ViewSchemes;
