import React from "react";
import { FcEmptyBattery } from "react-icons/fc";

const Signup = () => {
  const formStyle = {
    width: "40rem",
    height: "35rem",
  };

  return (
    <>
      <div className="flex align-items items-center justify-center mt-20 gap-40">
        <div className="flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/water.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <div
          className="flex items-center justify-center bg-sky-500 rounded-3xl"
          style={formStyle}
        >
          <form className="flex flex-col justify-center gap-8 text-white font-semibold my-5">
            <div className="flex items-center justify-center gap-8">
              <h1 className="font-bold text-4xl text-black">SignUp</h1>
            </div>
            <div className="flex items-center justify-start gap-6">
              <label htmlFor="fullname">Fullname:</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
                className="text-black"
                required
              />
            </div>
            <div className="flex items-center justify-start gap-8">
              <label htmlFor="gender">Gender:</label>
              <div className="flex items-center justify-center gap-2">
                <input type="radio" value="male" name="gender" required /> Male
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  required
                />{" "}
                Female
                <input type="radio" value="other" name="gender" required />{" "}
                Other
              </div>
            </div>
            <div className="flex items-center justify-start gap-12">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="text-black"
                required
              />
            </div>
            <div className="flex items-center justify-start gap-3">
              <label htmlFor="mobile">Mobile No:</label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                placeholder="Mobile No"
                className="text-black"
                required
              />
            </div>
            <div className="flex items-center justify-start gap-5">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="text-black"
                required
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="text-black"
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className="bg-blue-900 p-2 px-4 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/tree.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex h-16 align-items items-center justify-center mt-20">
        <div className="w-full h-full flex align-items items-center justify-center border bg-yellow-500 rounded-tl-xl rounded-tr-xl">
          <h1 className="font-semibold text-xl">Notification</h1>
        </div>
        <div className="w-full h-full flex align-items items-center justify-center border bg-sky-500 rounded-tl-xl rounded-tr-xl">
          <h1 className="font-semibold text-xl">Alert & Link</h1>
        </div>
        <div className="w-full h-full flex align-items items-center justify-center border bg-black text-white rounded-tl-xl rounded-tr-xl">
          <h1 className="font-semibold text-xl">Awards</h1>
        </div>
      </div>
      <div className="flex flex-col h-40 align-items items-center justify-center border">
        <FcEmptyBattery className="w-fll h-full text-6xl" />
        <h1>No Data</h1>
      </div>
    </>
  );
};

export default Signup;
