import React from "react";

const Achievements = () => {
  const descriptionStyle = {
    width: "45rem",
    left: "32.5%",
    borderRadius: "30rem 0 0 30rem",
  };
  return (
    <>
      <h1 className="m-10 flex justify-center font-bold text-4xl text-red-700">
        Achievements
      </h1>
      <div className="flex items-center">
        <div className="flex flex-col gap-36">
          <div className="flex flex-col justify-center">
            <div
              className="flex items-center h-36 bg-white absolute scale-y-75 scale-x-75"
              style={descriptionStyle}
            >
              <p className="pl-36 font-semibold text-lg">
                Nitin Gadkari praised ASSOCHAM's pioneering efforts in hosting
                educational workshops, which helped save Rs. 5000 crores on the
                Zoji-la Tunnel's construction costs.
              </p>
            </div>
            <div
              className="w-32 absolute scale-y-75 scale-x-75"
              style={{ left: "36.5%" }}
            >
              <img
                src="https://www.assocham.org/1652419531-preloader%20(1).png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="flex items-center h-36 bg-white absolute"
              style={descriptionStyle}
            >
              <p className="pl-36 font-semibold text-lg">
                Nitin Gadkari praised ASSOCHAM's pioneering efforts in hosting
                educational workshops, which helped save Rs. 5000 crores on the
                Zoji-la Tunnel's construction costs.
              </p>
            </div>
            <div className="w-32 absolute" style={{ left: "33%" }}>
              <img
                src="https://www.assocham.org/1652419531-preloader%20(1).png"
                alt="logo"
                className="w-full h-full "
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="flex items-center h-36 bg-white absolute scale-y-75 scale-x-75"
              style={descriptionStyle}
            >
              <p className="pl-36 font-semibold text-lg">
                Nitin Gadkari praised ASSOCHAM's pioneering efforts in hosting
                educational workshops, which helped save Rs. 5000 crores on the
                Zoji-la Tunnel's construction costs.
              </p>
            </div>
            <div
              className="w-32 absolute scale-y-75 scale-x-75"
              style={{ left: "36.5%" }}
            >
              <img
                src="https://www.assocham.org/1652419531-preloader%20(1).png"
                alt="logo"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="w-full" style={{ height: "37rem" }}>
          <img
            src="https://wallpaperaccess.com/full/1815193.jpg"
            alt="achievements"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Achievements;
