import React, { useState } from "react";

const ViewUpcomingEvents = () => {
  const [active, setActive] = useState(true);

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

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex px-8 w-full items-center justify-between font-semibold text-xl text-gray-700">
          <h1 className="w-32 mr-1">Sl.No</h1>
          <h1 className="w-96 mr-12">Name</h1>
          <h1 className="w-36">Image</h1>
          <h1 className="w-72 mr-4">Location</h1>
          <h1 className="w-40">Date</h1>
          <h1 className="w-80 invisible">Hello</h1>
        </div>
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <div className="flex flex-col gap-2">
            {upcomingEvent.map((event, index) => (
              <div className="flex w-full border border-black py-2 px-8 items-center justify-between text-lg font-semibold">
                <h3 className="w-20">{index + 1}</h3>
                <h1 className="w-96">{event.title}</h1>
                <div className="w-24 h-12 mr-8">
                  <img
                    src={event.image}
                    alt="poster"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="w-60">{event.location}</h2>
                <h2 className="w-40">{event.date}</h2>
                <div className="flex gap-3 text-white">
                  <button className="bg-pink-500 px-2 py-1 rounded">
                    VIEW
                  </button>
                  <button
                    className={`bg-green-500 px-2 py-1 rounded ${
                      !active && "bg-gray-500"
                    } `}
                    onClick={() => setActive(!active)}
                  >
                    {`${active ? "ACTIVE" : "DEACTIVE"} `}
                  </button>
                  <button className="bg-blue-500 px-2 py-1 rounded">
                    EDIT
                  </button>
                  <button className="bg-red-500 px-2 py-1 rounded">
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
