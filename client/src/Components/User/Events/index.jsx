import React from "react";

const Events = () => {
  const myStyle = {
    left: "15%",
    top: "27%",
  };

  const imageStyle = {
    width: "100%",
    height: "30rem",
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

  const awareness = [
    {
      key: 1,
      image:
        "https://www.mohfw.gov.in/assets/images/socialdistancingEnglish_page-0001.png",
    },
    {
      key: 2,
      image:
        "https://www.mohfw.gov.in/assets/images/FINAL_14_03_2020_ENg_page-0001.png",
    },
    {
      key: 3,
      image:
        "https://www.mohfw.gov.in/assets/images/ProtectivemeasuresEng_page-0001.png",
    },
    {
      key: 4,
      image:
        "https://www.mohfw.gov.in/assets/images/Poster_Corona_ad_Eng_page-0001.png",
    },
  ];
  return (
    <>
      <div className="container m-auto mt-2">
        <h1
          className="text-white font-semibold text-4xl absolute"
          style={myStyle}
        >
          Events and Awareness Programs
        </h1>
        <div className="h-96">
          <img
            src="https://www.insight.com/en_US/content-and-resources/2017/07122017-control-data-and-deny-application-attacks-with-insight-and-f5/jcr:content/top-container-width/column_layout_458368662/-column-1/insight_image.img.jpg/1565981250982.jpg"
            alt="event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-16 justify-center">
          <h1 className="text-black font-semibold text-4xl text-center">
            Live Events
          </h1>
          <div
            className="flex items-center justify-center border border-gray-200 shadow-2xl mt-10"
            style={imageStyle}
          >
            <h1 className="text-gray-600 font-medium text-2xl">
              Currently No Live Events. ☹️
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-16 justify-center">
          <h1 className="text-black font-semibold text-4xl text-center">
            Upcoming Events
          </h1>
          <div className="flex gap-4">
            {upcomingEvent.map((items) => (
              <div
                className="p-10 border border-black shadow-2xl mt-10 bg-gray-900"
                style={imageStyle}
              >
                <div className="flex justify-center">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="w-full h-60 object-cover"
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
        </div>
        <div className="flex flex-col mt-16 justify-center">
          <h1 className="text-black font-semibold text-4xl text-center">
            Past Events
          </h1>
          <div className="flex gap-4">
            {pastEvent.map((items) => (
              <div
                className="p-10 shadow-2xl mt-10 bg-sky-900"
                style={imageStyle}
              >
                <div className="flex justify-center">
                  <iframe
                    className="w-full h-60 object-cover"
                    src={items.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
        </div>
        <div className="flex flex-col m-20">
          <h1 className="text-black font-semibold text-4xl text-center mb-10">
            Awareness
          </h1>
          <div className="flex justify-between">
            {awareness.map((items) => (
              <div className="w-80 h-60">
                <img
                  src={items.image}
                  alt="covid"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
