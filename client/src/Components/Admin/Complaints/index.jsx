import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const AdminComplaints = () => {
  const [loading, setLoading] = useState(true);
  const [complaints, setComplaints] = useState([]);
  const url = useLocation().pathname.split("/")[3];
  const statusTab = ["new", "processing", "resolved", "rejected"];

  const getComplaintsData = (status) => {
    axios
      .get(`http://localhost:8080/official/complaints/${status}`)
      .then((res) => {
        setComplaints(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Error in fetching complaints");
      });
  };

  useEffect(() => {
    getComplaintsData(url);
  }, []);

  const sendResponse = (e, id) => {
    e.preventDefault();
    const response = window.prompt("Enter response");
    if (response) {
      setLoading(true);
      const data = {
        id: id,
        response: response,
      };
      axios
        .post(`http://localhost:8080/official/complaints/response`, data)
        .then((res) => {
          alert("Response sent successfully.");
          getComplaintsData(url);
        })
        .catch((err) => {
          alert("Error in sending response.");
        });
    }
  };

  const handleStatusChange = (id, status) => {
    axios
      .post(`http://localhost:8080/official/complaints/update`, {
        id: id,
        status: status,
      })
      .then((res) => {
        alert(res.data);
        getComplaintsData(url);
      })
      .catch((err) => {
        alert("Error in updating status.");
      });
  };

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
          color={"green"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center py-4 rounded bg-blue-800 shadow-lg shadow-blue-600 mx-12 text-white">
            User Complaints List
          </h1>
          <div className="flex bg-sky-500 gap-16 p-2 font-bold text-2xl shadow-md shadow-sky-400 mx-12 rounded">
            {statusTab.map((item, index) => (
              <Link to={`/admin/complaints/${item}`} key={index}>
                <h3
                  className={`cursor-pointer p-2 rounded ${
                    url === item && "bg-black text-white"
                  } `}
                  onClick={() => getComplaintsData(item)}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </h3>
              </Link>
            ))}
          </div>
          {complaints.length > 0 ? (
            <table className="content-table dashboard complaints">
              <thead>
                <tr>
                  <th className="text-center">Raised By</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Phone</th>
                  <th className="text-center">Issue</th>
                  <th className="text-center">Priority</th>
                  <th className="text-center">Image</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr className="text-semibold" key={index}>
                    <td className="text-center">{complaint.name}</td>
                    <td className="text-center">{complaint.email}</td>
                    <td className="text-center">{complaint.phone}</td>
                    <td className="text-center">{complaint.description}</td>
                    <td className="text-center">
                      <h2
                        className={
                          complaint.priority === "normal"
                            ? "w-20 py-1 m-auto bg-green-500 rounded text-white"
                            : complaint.priority === "average"
                            ? "w-20 py-1 m-auto bg-yellow-500 rounded text-white"
                            : "w-20 py-1 m-auto bg-red-500 rounded text-white"
                        }
                      >
                        {complaint.priority[0].toUpperCase() +
                          complaint.priority.slice(1)}
                      </h2>
                    </td>
                    <td>
                      <img
                        src={complaint.image}
                        alt="complaint"
                        className="w-20 h-10 m-auto cursor-pointer"
                        onClick={(e) => showModal(e)}
                      />
                    </td>
                    <td className="text-center">
                      <div className="dropdown">
                        <h2
                          className={
                            complaint.status === "resolved"
                              ? "w-20 py-1 m-auto bg-green-500 rounded text-white"
                              : complaint.status === "processing"
                              ? "w-24 py-1 m-auto bg-yellow-500 rounded text-white"
                              : complaint.status === "rejected"
                              ? "w-20 py-1 m-auto bg-red-500 rounded text-white"
                              : "w-20 py-1 m-auto bg-blue-500 rounded text-white"
                          }
                        >
                          {complaint.status[0].toUpperCase() +
                            complaint.status.slice(1)}
                        </h2>
                        <div className="dropdown-content">
                          {complaint.status === "new" && (
                            <>
                              <h2
                                className="bg-yellow-500 cursor-pointer"
                                onClick={(e) =>
                                  handleStatusChange(
                                    complaint._id,
                                    "processing"
                                  )
                                }
                              >
                                Processing
                              </h2>
                              <h2
                                className="bg-green-500 cursor-pointer"
                                onClick={(e) =>
                                  handleStatusChange(complaint._id, "resolved")
                                }
                              >
                                Solved
                              </h2>
                              <h2
                                className="bg-red-500 cursor-pointer"
                                onClick={(e) =>
                                  handleStatusChange(complaint._id, "rejected")
                                }
                              >
                                Rejected
                              </h2>
                            </>
                          )}
                          {complaint.status === "processing" && (
                            <>
                              <h2
                                className="bg-green-500 cursor-pointer"
                                onClick={(e) =>
                                  handleStatusChange(complaint._id, "resolved")
                                }
                              >
                                Solved
                              </h2>
                              <h2
                                className="bg-red-500 cursor-pointer"
                                onClick={(e) =>
                                  handleStatusChange(complaint._id, "rejected")
                                }
                              >
                                Rejected
                              </h2>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {complaint.createdAt.split("T")[0]}
                    </td>
                    <td className="text-center">
                      <button
                        className={
                          complaint.remarks === "NA"
                            ? "px-2 py-1 bg-orange-500 rounded"
                            : "px-2 py-1 bg-green-500 rounded cursor-not-allowed"
                        }
                        type="submit"
                        onClick={(e) => sendResponse(e, complaint._id)}
                        disabled={complaint.remarks !== "NA" ? true : false}
                      >
                        {complaint.remarks === "NA" ? "Respond" : "Responded"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="font-bold text-4xl text-center my-40">
              Currently No {url[0].toUpperCase() + url.slice(1)} Complaints. ☹️
            </h1>
          )}
          <div
            id="poupImageContainer"
            className="overflow-scroll border-8 border-blue-600"
            style={{
              maxWidth: "80%",
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
                Image
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
      ;
    </>
  );
};

export default AdminComplaints;
