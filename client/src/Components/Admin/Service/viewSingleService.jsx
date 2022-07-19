import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AdminViewSingleServices = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const page = useLocation();
  const serviceID = page.pathname.replace("/admin/services/view/", "");
  const categoryID = page.pathname.split("/")[4];

  const getCategory = () => {
    axios
      .get(`http://localhost:8080/user/services/${categoryID}/`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getService = () => {
    axios
      .get(`http://localhost:8080/admin/services/view/${serviceID}`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteService = (id) => {
    axios
      .put(`http://localhost:8080/admin/services/view/delete`, {
        serviceId: id,
      })
      .then((res) => {
        alert(res.data);
        getService();
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getCategory();
    getService();
  });

  return (
    <>
      <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
        {categories.map((category) => {
          if (category._id === serviceID.split("/")[1]) return category.name;
          return null;
        })}
      </h1>
      {services.length > 0 ? (
        <table className="content-table dashboard">
          <thead>
            <tr>
              <th className="text-center">SL.NO</th>
              <th className="text-center">Service Name</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((items, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{items.name}</td>
                <td className="flex items-center justify-center gap-5">
                  <button
                    className="bg-red-500 px-2 rounded text-white"
                    onClick={(e) => deleteService(items._id)}
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
          No Services Found. ☹️
        </h1>
      )}
    </>
  );
};

export default AdminViewSingleServices;
