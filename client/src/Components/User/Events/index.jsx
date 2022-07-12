import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [liveEvent, setLiveEvents] = useState([]);

  const getLiveEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/live")
      .then((res) => {
        const tempLiveEvents = [];
        res.data.forEach((event) => {
          tempLiveEvents.push(event);
        });
        setLiveEvents(tempLiveEvents);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
        alert(err);
      });
  };

  const [pastEvent, setPastEvent] = useState([]);

  const getPastEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/past")
      .then((res) => {
        const tempUpcomingEvent = [];
        res.data.forEach((event) => {
          tempUpcomingEvent.push(event);
        });
        setPastEvent(tempUpcomingEvent);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getLiveEvents();
    getUpcomingEvents();
    getPastEvents();
  }, []);

  const awareness = [
    "https://www.mohfw.gov.in/assets/images/socialdistancingEnglish_page-0001.png",
    "https://www.mohfw.gov.in/assets/images/FINAL_14_03_2020_ENg_page-0001.png",
    "https://www.mohfw.gov.in/assets/images/ProtectivemeasuresEng_page-0001.png",
    "https://www.mohfw.gov.in/assets/images/Poster_Corona_ad_Eng_page-0001.png",
  ];

  return (
    <>
      <div className="h-96">
        <img
          src="https://circulareconomy.europa.eu/platform/sites/all/themes/cecon_theme/images/events.jpg"
          alt="event"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-semibold text-4xl text-center p-10">Live Events</h1>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-10 border border-gray-100 rounded shadow-2xl">
        {liveEvent.length !== 0 ? (
          liveEvent.map((items, index) => (
            <div
              className="p-10 hover:shadow-2xl bg-sky-300 rounded"
              key={index}
            >
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
          ))
        ) : (
          <h1 className="flex items-center justify-center text-gray-500 font-medium text-3xl w-full h-96">
            Currently No Live Events. ☹️
          </h1>
        )}
      </div>
      <h1 className="font-semibold text-4xl text-center p-10">
        Upcoming Events
      </h1>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-10 border border-gray-100 rounded shadow-2xl">
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
      </div>
      <h1 className="font-semibold text-4xl text-center p-10">Past Events</h1>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-10 border border-gray-100 rounded shadow-2xl">
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
      </div>
      <h1 className="font-semibold text-4xl text-center p-10">Awareness</h1>
      <div className="flex justify-center gap-5">
        {awareness.map((items, index) => (
          <div className="w-80 p-2 border border-black rounded" key={index}>
            <img
              src={items}
              alt={items.split("/")[4]}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
