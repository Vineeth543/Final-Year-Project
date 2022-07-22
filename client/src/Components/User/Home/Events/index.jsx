import React, { useEffect, useState } from "react";
import axios from "axios";

const UserHomePageEvents = () => {
  const [pastEvent, setPastEvent] = useState([]);
  const [liveEvent, setLiveEvents] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  const getLiveEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/live")
      .then((res) => {
        if (res.data.length > 3) {
          setLiveEvents(res.data.slice(0, 3));
        } else {
          setLiveEvents(res.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getUpcomingEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/upcoming")
      .then((res) => {
        if (res.data.length > 3) {
          setUpcomingEvent(res.data.slice(0, 3));
        } else {
          setUpcomingEvent(res.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getPastEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/past")
      .then((res) => {
        if (res.data.length > 3) {
          setPastEvent(res.data.slice(0, 3));
        } else {
          setPastEvent(res.data);
        }
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

  return (
    <>
      <div className="flex flex-col mx-44 gap-10">
        <h1 className="text-4xl text-center font-bold">Village Events</h1>
        <div className="flex flex-wrap m-auto gap-12">
          {liveEvent.map((items, index) => (
            <div className="shadow-lg hover:shadow-2xl bg-white" key={index}>
              <div className="w-[30rem] h-72">
                <iframe
                  className="w-full h-full"
                  src={items.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col p-6 gap-3">
                <h4 className="text-black text-center text-2xl font-bold">
                  {items.name}
                </h4>
                <h4 className="text-gray-500 font-medium text-lg">
                  {items.description}
                </h4>
                <div className="flex items-center justify-between text-black font-semibold text-xl">
                  <h4>{items.place}</h4>
                  <h4>{items.date}</h4>
                </div>
              </div>
            </div>
          ))}
          {upcomingEvent.map((items, index) => (
            <div className="shadow-lg hover:shadow-2xl bg-white" key={index}>
              <div className="w-[30rem] h-72">
                <img src={items.poster} alt={items.name} className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col p-6 gap-3">
                <h4 className="text-black text-center text-2xl font-bold">
                  {items.name}
                </h4>
                <h4 className="text-gray-500 font-medium text-lg">
                  {items.description}
                </h4>
                <div className="flex items-center justify-between text-black font-semibold text-xl">
                  <h4>{items.place}</h4>
                  <h4>{items.date}</h4>
                </div>
              </div>
            </div>
          ))}
          {pastEvent.map((items, index) => (
            <div className="shadow-lg hover:shadow-2xl bg-white" key={index}>
              <div className="w-[30rem] h-72">
                <iframe
                  className="w-full h-full"
                  src={items.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col p-6 gap-3">
                <h4 className="text-black text-center text-2xl font-bold">
                  {items.name}
                </h4>
                <h4 className="text-gray-500 font-medium text-lg">
                  {items.description}
                </h4>
                <div className="flex items-center justify-between text-black font-semibold text-xl">
                  <h4>{items.place}</h4>
                  <h4>{items.date}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserHomePageEvents;
