import React, { useState } from "react";

const ViewUpcomingEvents = () => {
  const [active, setActive] = useState(true);

  const pastEvent = [
    {
      key: 1,
      title: "Mann Ki Baat",
      location: "Radio",
      video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
      date: "28 May, 2022",
    },
    {
      key: 1,
      title: "Social Forestry",
      location: "Village Panchayat",
      video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
      date: "5th June 2022",
    },
    {
      key: 1,
      title: "Turning waste into wealth, training program",
      location: "Government School",
      video: "https://www.youtube.com/embed/kf7KBaviEE0?controls=0",
      date: "10th June 2022",
    },
    {
      key: 1,
      title: "Mann Ki Baat",
      location: "Radio",
      video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
      date: "28 May, 2022",
    },
    {
      key: 1,
      title: "Social Forestry",
      location: "Village Panchayat",
      video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
      date: "5th June 2022",
    },
    {
      key: 1,
      title: "Turning waste into wealth, training program",
      location: "Government School",
      video: "https://www.youtube.com/embed/kf7KBaviEE0?controls=0",
      date: "10th June 2022",
    },
    {
      key: 1,
      title: "Mann Ki Baat",
      location: "Radio",
      video: "https://www.youtube.com/embed/thUXYWp0VvU?controls=0",
      date: "28 May, 2022",
    },
    {
      key: 1,
      title: "Social Forestry",
      location: "Village Panchayat",
      video: "https://www.youtube.com/embed/68jnF_MZW7g?controls=0",
      date: "5th June 2022",
    },
  ];

  return (
    <>
      <div className="flex m-10">
        <div className="flex flex-wrap gap-8 bg-white p-8 justify-center">
          {pastEvent.map((event) => (
            <div className="flex flex-col bg-lime-100 hover:shadow-2xl border-2 border-lime-400 p-4 text-lg font-semibold gap-4">
              <div className="w-80">
                <iframe
                  className="w-full h-full object-cover"
                  src={event.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h1 className="w-80">{event.title}</h1>
              <h2>{event.location}</h2>
              <h2>{event.date}</h2>
              <div className="flex gap-3 m-auto text-white">
                <button className="bg-pink-500 px-1 rounded">VIEW</button>
                <button
                  className={`bg-green-500 px-1 rounded ${
                    !active && "bg-gray-500"
                  } `}
                  onClick={() => setActive(!active)}
                >
                  {`${active ? "ACTIVE" : "DEACTIVE"} `}
                </button>
                <button className="bg-blue-500 px-1 rounded">EDIT</button>
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
