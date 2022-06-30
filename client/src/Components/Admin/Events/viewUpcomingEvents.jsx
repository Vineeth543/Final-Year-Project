import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUpcomingEvents = () => {
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  // const [eventId, setEventId] = useState("");

  const getUpcomingEvents = () => {
    axios
      .get("http://localhost:8080/admin/events/viewEvent/upcoming")
      .then((res) => {
        console.log(res.data);
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

  // const upcomingEvent = [
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     image:
  //       "https://www.pmindia.gov.in/wp-content/uploads/2022/03/Thumbnail-Maan-ki-baat-27-March-2022-English.jpg",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     image:
  //       "https://www.panchayat.gov.in/documents/20126/404934/WhatsApp+Image+2021-08-05+at+15.29.56+%281%29.jpeg",
  //     date: "5th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Turning waste into wealth, training program",
  //     location: "Government School",
  //     image: "https://wwfin.awsassets.panda.org/img/original/photo_21_3.jpg",
  //     date: "10th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     image:
  //       "https://www.pmindia.gov.in/wp-content/uploads/2022/03/Thumbnail-Maan-ki-baat-27-March-2022-English.jpg",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     image:
  //       "https://www.panchayat.gov.in/documents/20126/404934/WhatsApp+Image+2021-08-05+at+15.29.56+%281%29.jpeg",
  //     date: "5th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Turning waste into wealth, training program",
  //     location: "Government School",
  //     image: "https://wwfin.awsassets.panda.org/img/original/photo_21_3.jpg",
  //     date: "10th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Mann Ki Baat",
  //     location: "Radio",
  //     image:
  //       "https://www.pmindia.gov.in/wp-content/uploads/2022/03/Thumbnail-Maan-ki-baat-27-March-2022-English.jpg",
  //     date: "28 May, 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Social Forestry",
  //     location: "Village Panchayat",
  //     image:
  //       "https://www.panchayat.gov.in/documents/20126/404934/WhatsApp+Image+2021-08-05+at+15.29.56+%281%29.jpeg",
  //     date: "5th June 2022",
  //   },
  //   {
  //     key: 1,
  //     title: "Turning waste into wealth, training program",
  //     location: "Government School",
  //     image: "https://wwfin.awsassets.panda.org/img/original/photo_21_3.jpg",
  //     date: "10th June 2022",
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex px-8 w-full items-center justify-between font-semibold text-xl text-gray-700">
          <h1 className="w-24">Sl.No</h1>
          <h1 className="pr-8 w-64">Name</h1>
          <h1 className="w-96">Description</h1>
          <h1 className="w-36">Image</h1>
          <h1 className="w-40">Location</h1>
          <h1 className="w-40">Date</h1>
          <h1 className="w-20 invisible">Hello</h1>
        </div>
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <div className="flex flex-col gap-2">
            {upcomingEvent.map((event, index) => (
              <div className="flex w-full border border-black py-2 px-8 items-center justify-between text-lg font-semibold">
                <h3 className="w-20">{index + 1}</h3>
                <h1 className="w-64">{event.name}</h1>
                <h1 className="w-96">{event.description}</h1>
                <div className="w-24 h-12 mr-12">
                  <img
                    src={event.poster}
                    alt="poster"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="w-40">{event.place}</h2>
                <h2 className="w-40">{event.date}</h2>
                <div className="flex gap-3 text-white">
                  <button
                    className="bg-red-500 px-2 py-1 rounded"
                    onClick={() => deleteUpcomingEvent(event._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUpcomingEvents;
