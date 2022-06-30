import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUpcomingEvents = () => {
  const [pastEvent, setPastEvent] = useState([]);

  const getPastEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/past")
      .then((res) => {
        console.log(res.data);
        const tempUpcomingEvent = [];
        res.data.forEach((event) => {
          tempUpcomingEvent.push(event);
        });
        setPastEvent(tempUpcomingEvent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPastEvents();
  }, []);

  // const pastEvent = [
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
  //     date: "5th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Turning waste into wealth, training program",
  //     location: "Government School",
  //     video: "https://www.youtube.com/embed/kf7KBaviEE0?controls=0",
  //     date: "10th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
  //     date: "5th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Turning waste into wealth, training program",
  //     location: "Government School",
  //     video: "https://www.youtube.com/embed/kf7KBaviEE0?controls=0",
  //     date: "10th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
  //     date: "5th June 2022",
  //   },
  // ];

  return (
    <>
      <div className="flex m-10">
        <div className="flex flex-wrap gap-8 bg-white p-8 justify-center">
          {pastEvent.map((event, index) => (
            <div
              className="flex flex-col bg-lime-100 hover:shadow-2xl border-2 border-lime-400 p-4 text-lg font-semibold gap-4"
              key={index}
            >
              <div className="w-80">
                <iframe
                  className="w-full h-full object-cover"
                  src={event.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h1 className="w-80">{event.name}</h1>
              <h2>{event.place}</h2>
              <h2>{event.date}</h2>
              <div className="flex gap-3 m-auto text-white">
                <button className="bg-red-500 px-1 rounded">DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewUpcomingEvents;
