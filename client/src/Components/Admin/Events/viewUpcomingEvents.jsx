import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUpcomingEvents = () => {
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  const getUpcomingEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/upcoming")
      .then((res) => {
        const tempUpcomingEvent = [];
        res.data.forEach((event) => {
          tempUpcomingEvent.push(event);
        });
        setUpcomingEvent(tempUpcomingEvent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUpcomingEvent = (id) => {
    axios
      .post(`http://localhost:8080/admin/events/deleteEvents/`, { id: id })
      .then((res) => {
        alert(res.data);
        getUpcomingEvents();
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getUpcomingEvents();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center text-white py-4 rounded bg-green-700 mx-12">
        Upcoming Events
      </h1>
      <table className="content-table upcoming">
        <thead>
          <tr>
            <th className="text-center">Sl.No</th>
            <th className="text-center">Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Image</th>
            <th className="text-center">Location</th>
            <th className="text-center">Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {upcomingEvent.map((event, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{event.name}</td>
              <td className="text-center">{event.description}</td>
              <td>
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-24 object-cover m-auto"
                />
              </td>
              <td className="text-center">{event.place}</td>
              <td className="text-center">{event.date}</td>
              <td className="text-center">
                <button
                  className="bg-red-600 px-2 py-1 rounded text-white"
                  onClick={() => deleteUpcomingEvent(event._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ViewUpcomingEvents;
