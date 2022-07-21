import React, { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [liveEvent, setLiveEvents] = useState([]);

  const getLiveEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/live")
      .then((res) => {
        setLiveEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const endLiveEvents = (id) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/admin/events/viewEvents/updateEvent", {
        id: id,
        eventType: "past",
      })
      .then((res) => {
        setLoading(false);
        getLiveEvents();
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteLiveEvents = (id) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/admin/events/deleteEvents", { id: id })
      .then((res) => {
        setLoading(false);
        getLiveEvents();
        alert(res.data);
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
      {loading ? (
        <MoonLoader
          color={"red"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center text-white py-4 rounded bg-red-700 mx-12">
            Live Events
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-12 px-10">
            {liveEvent.length > 0 ? (
              liveEvent.map((items) => (
                <div
                  className="flex flex-col items-center justify-center p-10 pb-5 shadow-2xl bg-red-500 gap-5 rounded-lg"
                  key={items._id}
                >
                  <div className="w-96 h-80">
                    <iframe
                      className="w-full h-full"
                      src={items.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-white text-xl font-semibold text-center">
                    {items.name}
                  </h4>
                  <div className="flex gap-20">
                    <button
                      className="bg-white text-black py-1 px-2 text-lg font-semibold rounded-lg"
                      onClick={() => endLiveEvents(items._id)}
                    >
                      End
                    </button>
                    <button
                      className="bg-black text-white py-1 px-2 text-lg font-semibold rounded-lg"
                      onClick={() => deleteLiveEvents(items._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="font-bold text-4xl my-20 text-center m-auto">
                Currently No Live Events. ☹️
              </h1>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Events;
