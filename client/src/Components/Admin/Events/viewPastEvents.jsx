import React, { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const ViewPastEvents = () => {
  const [loading, setLoading] = useState(true);
  const [pastEvent, setPastEvent] = useState([]);

  const getPastEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/past")
      .then((res) => {
        setPastEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deletePastEvents = (id) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/admin/events/deleteEvents", { id: id })
      .then((res) => {
        alert(res.data);
        getPastEvents();
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getPastEvents();
  }, []);

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
          <h1 className="font-bold text-4xl text-center text-white py-4 rounded bg-yellow-400 mx-12 text-black">
            Past Events
          </h1>
          {pastEvent.length > 0 ? (
            <table className="content-table past">
              <thead>
                <tr>
                  <th className="text-center">Sl.No</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Video</th>
                  <th className="text-center">Location</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pastEvent.map((event, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{event.name}</td>
                    <td className="text-center">{event.description}</td>
                    <td>
                      <iframe
                        className="w-24 h-12 m-auto"
                        src={event.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </td>
                    <td className="text-center">{event.place}</td>
                    <td className="text-center">{event.date}</td>
                    <td className="text-center">
                      <button
                        className="bg-red-600 px-2 py-1 rounded text-white"
                        onClick={() => deletePastEvents(event._id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="font-bold text-4xl my-20 text-center m-auto">
              No Past Events. ☹️
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default ViewPastEvents;
