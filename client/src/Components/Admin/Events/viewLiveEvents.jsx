import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [liveEvent, setLiveEvents] = useState([]);

  const getLiveEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/live")
      .then((res) => {
        console.log(res.data);
        const tempLiveEvents = [];
        res.data.forEach((event) => {
          tempLiveEvents.push(event);
        });
        setLiveEvents(tempLiveEvents);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const endLiveEvents = (id) => {
    axios
      .post("http://localhost:8080/admin/events/viewEvents/updateEvent", {
        id: id,
        eventType: "past",
      })
      .then((res) => {
        alert(res.data);
        getLiveEvents();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteLiveEvents = (id) => {
    axios
      .post("http://localhost:8080/admin/events/deleteEvents", {
        id: id,
      })
      .then((res) => {
        alert(res.data);
        getLiveEvents();
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getLiveEvents();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="w-full font-semibold text-4xl text-center px-10 pt-10">
          Live Events
        </h1>
        <div className="flex flex-wrap gap-5 p-10">
          {liveEvent.length !== 0 ? (
            liveEvent.map((items) => (
              <div
                className="flex flex-col items-center justify-center px-10 pt-10 pb-5 shadow-2xl bg-sky-900 gap-5"
                key={items._id}
              >
                <div className="h-60">
                  <iframe
                    className="h-full object-cover"
                    src={items.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-orange-400 text-xl font-semibold text-center">
                  {items.name}
                </h4>
                <div className="flex gap-20">
                  <button
                    className="bg-green-600 text-white py-1 px-2 text-lg font-semibold"
                    onClick={() => endLiveEvents(items._id)}
                  >
                    End
                  </button>
                  <button
                    className="bg-red-600 text-white py-1 px-2 text-lg font-semibold"
                    onClick={() => deleteLiveEvents(items._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-gray-600 font-medium text-2xl p-10">
              Currently No Live Events. ☹️
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
