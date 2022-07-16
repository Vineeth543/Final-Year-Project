import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";

const AdminSchemes = () => {
  const [scheme, setSchemes] = useState([]);

  const getSchemeData = () => {
    axios
      .get("http://localhost:8080/official/schemes/category")
      .then((res) => {
        setSchemes(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getSchemeData();
  }, []);

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
            <th className="text-center">Schemes Category</th>
          </tr>
        </thead>
        <tbody>
          {scheme.map((items, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <Link to={`/admin/schemes/view/${items._id}`}>
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
