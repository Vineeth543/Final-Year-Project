import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminServices = () => {
  const services = [
    {
      id: "62b87ae8be83ec8f10283763",
      title: "Farmer Welfare",
    },
    {
      id: "62b87c7bbe83ec8f1028376f",
      title: "Electricity Services",
    },
    {
      id: "62b87b00be83ec8f10283765",
      title: "Housing related services",
    },
    {
      id: "62b87c95be83ec8f10283771",
      title: "Student educational services",
    },
    {
      id: "62b87b1dbe83ec8f10283767",
      title: "Employement and Training",
    },
    {
      id: "62b87cbabe83ec8f10283773",
      title: "Driving and Transport Services",
    },
    {
      id: "62b87b35be83ec8f10283769",
      title: "Health and Drug related Services",
    },
    {
      id: "62b87cd7be83ec8f10283775",
      title: "Police and Security Services",
    },
    {
      id: "62b87b67be83ec8f1028376b",
      title: "Birth, Death & Marriage related Services",
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
      title: "Citizen Services",
    },
  ];

  return (
    <>
      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-xl shadow-blue-600 mx-12">
        <h1 className="font-semibold text-4xl text-white">Services</h1>
        <Link className="flex" to="/admin/services/add-service">
          <IoMdAddCircleOutline className="p-2 text-5xl bg-white rounded-tl-lg rounded-bl-lg" />
          <h2 className="p-2 text-xl font-semibold bg-white rounded-tr-lg rounded-br-lg">
            New Service
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
          {services.map((items, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <Link to={`/admin/services/view/${items.id}`}>
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

export default AdminServices;
