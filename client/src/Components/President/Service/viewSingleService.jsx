import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AdminViewSingleServices = () => {
  const [active, setActive] = useState(true);

  const [categories, setCategories] = useState([]);
  const page = useLocation();
  const serviceID = page.pathname.replace("/admin/services/view/", "");

  const getCategory = () => {
    axios
      .get(`http://localhost:8080/admin/services/view/${serviceID}`)
      .then((res) => {
        const Categories = res.data;
        const subCategory = [];
        Categories.forEach((element) => {
          subCategory.push(element);
        });
        setCategories(subCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteService = (id) => {
    axios
      .put(`http://localhost:8080/admin/services/view/delete`, {
        serviceId: id,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const initiateDelete = (id) => {
    console.log(id);
    deleteService(id);
  };

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-semibold text-4xl text-gray-700 text-center">
            Hello
          </h1>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80 text-gray-700">Sl.No</h1>
          <h1 className="font-semibold text-xl text-gray-700">Service Name</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {categories.map((items, index) => (
            <div
              className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2"
              key={items.name}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{index + 1}</h1>
                  <h1 className="font-semibold text-xl cursor-pointer">
                    {items.name}
                  </h1>
                </div>
                <div className="flex gap-3">
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
                    onClick={() => initiateDelete(items._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminViewSingleServices;
