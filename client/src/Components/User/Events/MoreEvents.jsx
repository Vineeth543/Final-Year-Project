import React, { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MoreEvents = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const event = location.pathname.split("/")[4];
  const [pastEvent, setPastEvent] = useState([]);
  const [liveEvent, setLiveEvents] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);

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

  const getUpcomingEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/upcoming")
      .then((res) => {
        setUpcomingEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

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

  const getEventData = (event) => {
    if (event === "live") getLiveEvents();
    if (event === "upcoming") getUpcomingEvents();
    if (event === "past") getPastEvents();
  };

  useEffect(() => {
    getEventData(event);
  }, []);

  const LiveEvents = () => {
    return (
      <>
        {liveEvent.map((items, index) => (
          <div className="p-10 hover:shadow-2xl bg-sky-300 rounded" key={index}>
            <div className="w-96 h-60">
              <iframe
                className="w-full h-full object-cover"
                src={items.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col items-center justify-center mt-3 gap-3 text-gray-900 text-2xl font-semibold">
              <h4>{items.name}</h4>
              <h4>Live from {items.place}</h4>
            </div>
          </div>
        ))}
      </>
    );
  };

  const UpcomingEvents = () => {
    return (
      <>
        {upcomingEvent.map((items, index) => (
          <div className="p-10 hover:shadow-2xl bg-gray-900" key={index}>
            <div className="w-96 h-60">
              <img
                src={items.poster}
                alt={items.name}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="flex flex-col mt-3 gap-3 text-lg font-semibold">
              <h4 className="text-orange-400">{items.name}</h4>
              <h4 className="text-orange-400">{items.place}</h4>
              <h4 className="text-white">{items.date}</h4>
              <button className="bg-orange-400 text-white p-1">
                Event Details
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  const PastEvents = () => {
    return (
      <>
        {pastEvent.map((items, index) => (
          <div className="p-10 hover:shadow-2xl bg-sky-900" key={index}>
            <div className="w-96 h-60">
              <iframe
                className="w-full h-full"
                src={items.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col mt-3 gap-3 text-lg font-semibold">
              <h4 className="text-orange-400">{items.name}</h4>
              <h4 className="text-orange-400">{items.place}</h4>
              <h4 className="text-white">{items.date}</h4>
              <button className="bg-orange-400 text-white p-1">
                Event Details
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-semibold text-4xl text-center">
            {event[0].toUpperCase() + event.slice(1)} Events
          </h1>
          <div className="flex flex-wrap m-auto gap-12 my-6">
            {event === "live" ? LiveEvents() : null}
            {event === "upcoming" ? UpcomingEvents() : null}
            {event === "past" ? PastEvents() : null}
          </div>
        </>
      )}
    </>
  );
};

export default MoreEvents;
