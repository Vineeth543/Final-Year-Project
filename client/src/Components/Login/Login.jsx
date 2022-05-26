import React from "react";
import { FcEmptyBattery } from "react-icons/fc";

const Login = () => {
  const formStyle = {
    width: "40rem",
    height: "20rem",
  };

  const dataSource = [];

  const columns = [
    {
      title: "Notification",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Alert & Link",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Awards",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <div className="flex align-items items-center justify-center mt-20 gap-40">
        <div className="flex items-center justify-center">
          <img
            src="http://localhost:3000/static/media/water.35d3ef96.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <div
          className="flex items-center justify-center bg-sky-500 rounded-3xl"
          style={formStyle}
        >
          <form className="flex flex-col justify-center gap-8 text-white font-semibold ">
            <div className="flex items-center justify-center gap-8">
              <label htmlFor="language">Language:</label>
              <div className="flex items-center justify-center gap-2">
                <input type="radio" value="Kannada" name="language" /> Kannada
                <input
                  type="radio"
                  value="English"
                  name="language"
                  checked
                />{" "}
                English
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <label htmlFor="usernamme">Username:</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <label htmlFor="remember">Remember me</label>
                <input type="checkbox" name="remember" id="remember" />
              </div>
              <button
                type="submit"
                className="bg-blue-900 p-2 px-4 rounded-2xl"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="http://localhost:3000/static/media/tree.3262bdd1.png"
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

export default Login;
