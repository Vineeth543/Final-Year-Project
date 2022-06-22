import React from "react";
import { Link } from "react-router-dom";

const AdminEvents = () => {
  const imageStyle = {
    width: "40%",
    height: "22rem",
  };

  const upcomingEvent = [
    {
      key: 1,
      title: "Mann Ki Baat",
      location: "Radio",
      image:
        "https://www.pmindia.gov.in/wp-content/uploads/2022/03/Thumbnail-Maan-ki-baat-27-March-2022-English.jpg",
      date: "28 May, 2022",
    },
    {
      key: 1,
      title: "Social Forestry",
      location: "Village Panchayat",
      image:
        "https://www.panchayat.gov.in/documents/20126/404934/WhatsApp+Image+2021-08-05+at+15.29.56+%281%29.jpeg",
      date: "5th June 2022",
    },
    {
      key: 1,
      title: "Turning waste into wealth, training program",
      location: "Government School",
      image: "https://wwfin.awsassets.panda.org/img/original/photo_21_3.jpg",
      date: "10th June 2022",
    },
  ];

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
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col justify-between p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-bold text-2xl">Live Events</h1>
          <Link
            className="flex text-xl underline"
            to="/admin/events/live-event"
          >
            Start Live Event
          </Link>
        </div>
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-bold text-2xl">Upcoming Events</h1>
          <Link className="flex text-xl underline" to="/admin/events/upcoming">
            Add Upcoming Event
          </Link>
          <div className="flex gap-4">
            {upcomingEvent.map((items) => (
              <div
                className="p-4 border border-black shadow-2xl bg-gray-900"
                style={imageStyle}
              >
                <div className="flex justify-center">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="w-56 h-40 object-cover"
                  />
                </div>
                <div className="flex flex-col mt-5 gap-3">
                  <h4 className="text-orange-400">{items.title}</h4>
                  <h4 className="text-orange-400">{items.location}</h4>
                  <h4 className="text-white">{items.date}</h4>
                  <button className="bg-orange-400 text-white p-1 text-lg">
                    Event Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="w-12 bg-red-400">
              <img
                src="https://static.thenounproject.com/png/640392-200.png"
                alt="move"
                className="w-full object-cover"
              />
            </button>
            <button className="w-12 bg-red-400">
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_215128.png"
                alt="delete"
                className="w-full object-cover"
              />
            </button>
            <button className="w-12 bg-red-400">
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61456.png"
                alt="edit"
                className="w-full object-cover"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5  rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-bold text-2xl">Past Events</h1>
          <div className="flex gap-4">
            {pastEvent.map((items) => (
              <div className="p-10 shadow-2xl bg-sky-900" style={imageStyle}>
                <div className="flex justify-center">
                  <iframe
                    className="w-full 60 object-cover"
                    src={items.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-orange-400">{items.title}</h4>
                  <h4 className="text-orange-400">{items.location}</h4>
                  <h4 className="text-white">{items.date}</h4>
                  <button className="bg-orange-400 text-white p-1 text-lg">
                    Event Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link
            className="flex text-xl underline justify-center"
            to="/admin/events/past"
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminEvents;
