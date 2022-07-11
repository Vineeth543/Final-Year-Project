import React, { useState } from "react";
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
      id: 1,
      title: "Schemes for Child Welfare",
    },
    {
      id: 2,
      title: "Schemes for Unemployed and Poor",
    },
    {
      id: 3,
      title: "Schemes for Academicians",
    },
    {
      id: 4,
      title: "Aatma Nirbhar Bharat Abhiyaan",
    },
    {
      id: 5,
      title: "Schemes for Farmers",
    },
    {
      id: 6,
      title: "Schemes for Senior Citizens",
    },
    {
      id: 7,
      title: "Schemes for Students",
    },
    {
      id: 8,
      title: "Schemes for Anganwadi workers",
    },
    {
      id: 9,
      title: "Schemes for Entrepreneurs",
    },
    {
      id: 10,
      title: "Schemes for Women",
    },
    {
      id: 11,
      title: "MGNAREGA",
    },
    {
      id: 12,
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
        {Schemes[schemeID - 1].title}
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
