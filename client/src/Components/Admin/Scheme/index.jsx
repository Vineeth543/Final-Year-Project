import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminSchemes = () => {
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

  return (
    <>
      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-lg shadow-blue-600 mx-12">
        <h1 className="font-semibold text-4xl text-white">Schemes</h1>
        <Link className="flex w-fit" to="/admin/schemes/add-scheme">
          <IoMdAddCircleOutline className="p-2 text-whit text-5xl bg-white rounded-tl-lg rounded-bl-lg" />
          <h2 className="p-2 text-xl font-semibold text-whit bg-white rounded-tr-lg rounded-br-lg">
            New Scheme
          </h2>
        </Link>
      </div>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center">SL.NO</th>
            <th className="text-center">Service Title</th>
          </tr>
        </thead>
        <tbody>
          {Schemes.map((items, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <Link to={`/admin/schemes/view/${items.id}`}>
                  {items.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminSchemes;
