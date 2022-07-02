import React, { useState } from "react";
import { FcEmptyBattery } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const formStyle = {
    width: "40rem",
    height: "28rem",
  };
  const nav = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (phone === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }

    const User = {
      phone: phone,
      password: password,
    };

    axios
      .post("http://localhost:8080/user/login", User)
      .then((result) => {
        if (result.data.status === "success") {
          alert(result.data.msg);
          nav("/user");
          localStorage.setItem("CCPS-loggedIn", "true");
          localStorage.setItem("CCPS-userID", result.data.userId);
        } else alert(result.data.msg);
      })
      .catch((err) => {
        alert(err.data);
      });
    setPhone("");
    setPassword("");
  };

  return (
    <>
      <div className="flex align-items items-center justify-center mt-10 gap-40">
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/water.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <div
          className="flex flex-col items-center justify-center bg-sky-500 rounded-3xl"
          style={formStyle}
        >
          <h1 className="font-bold text-4xl text-black">Login</h1>
          <form
            className="flex flex-col justify-center gap-8 text-white font-semibold my-5"
            onSubmit={login}
          >
            <div className="flex items-center justify-center gap-3">
              <label htmlFor="usernamme">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Mobile No"
                className="text-black"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="text-black"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <label htmlFor="remember">Remember me</label>
                <input type="checkbox" name="remember" id="remember" />
              </div>
              <button
                type="submit"
                className="bg-blue-800 p-2 px-4 rounded-2xl hover:bg-blue-900 focus:ring ring-blue-700"
              >
                Login
              </button>
              <div className="flex items-center justify-center gap-4">
                <Link to="#">Forgot Password..!?</Link>
              </div>
              <div className="flex items-center justify-center gap-4">
                New User..!? <Link to="/user/signup">SignUp</Link>
              </div>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/tree.png"
            alt="save tree"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex h-16 align-items items-center justify-center mt-20">
        <h1 className="flex justify-center items-center w-full h-full bg-yellow-500 rounded-tl-xl rounded-tr-xl font-semibold text-xl text-center border">
          Notification
        </h1>
        <h1 className="flex justify-center items-center w-full h-full bg-sky-500 rounded-tl-xl rounded-tr-xl font-semibold text-xl text-center border">
          Alert & Link
        </h1>
        <h1 className="flex justify-center items-center w-full h-full bg-black rounded-tl-xl rounded-tr-xl font-semibold text-xl text-white border">
          Awards
        </h1>
      </div>
      <div className="flex flex-col h-40 align-items items-center justify-center border">
        <FcEmptyBattery className="w-fll h-full text-6xl" />
        <h1>No Data</h1>
      </div>
    </>
  );
};

export default Login;
