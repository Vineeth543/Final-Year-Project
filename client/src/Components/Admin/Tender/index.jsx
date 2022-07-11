import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";

const AdminTenders = () => {
  const [tenderDetails, setTenders] = useState([]);

  const getTenders = () => {
    axios
      .get("http://localhost:8080/official/tenders/view")
      .then((res) => {
        const Tenders = res.data;
        const tempTenders = [];
        Tenders.forEach((element) => {
          tempTenders.push(element);
        });
        setTenders(tempTenders);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getTenders();
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-xl shadow-blue-600 mx-12">
        <h1 className="font-semibold text-4xl text-white">Tenders</h1>
        <Link className="flex w-fit" to="/admin/tenders/add-tender">
          <IoMdAddCircleOutline className="p-2 text-5xl bg-white rounded-tl-lg rounded-bl-lg" />
          <h2 className="p-2 text-xl font-semibold bg-white rounded-tr-lg rounded-br-lg">
            New Tender
          </h2>
        </Link>
      </div>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center border-double border-4 border-black">
              SL.NO
            </th>
            <th className="text-center border-double border-4 border-black">
              TENDER TITLE
            </th>
            <th className="text-center border-double border-4 border-black">
              CORRIGENDUM
            </th>
            <th className="w-60 text-center border-double border-4 border-black">
              OPENING DATE
            </th>
            <th className="w-56 text-center border-double border-4 border-black">
              CLOSING DATE
            </th>
            <th className="text-center border-double border-4 border-black">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {tenderDetails.map((tender, index) => (
            <tr key={index} className="text-center">
              <td className="border-double border-4 border-black p-2">
                {index + 1}
              </td>
              <td className="border-double border-4 border-black">
                <Link to={`view/${index + 1}`}>
                  {tender.title.substring(0, 60)}
                  {tender.title.length > 60 ? "..." : ""}
                </Link>
              </td>
              <td className="border-double border-4 border-black">
                {tender.description.substring(0, 60)}
                {tender.title.length > 60 ? "..." : ""}
              </td>
              <td className="border-double border-4 border-black">
                {tender.startDate.split("T")[0]}
              </td>
              <td className="border-double border-4 border-black">
                {tender.endDate.split("T")[0]}
              </td>
              <td className="border-double border-4 border-black">
                <Link to={`view/${tender._id}`}>
                  <button className="bg-pink-500 p-1 rounded text-white">
                    VIEW
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminTenders;
