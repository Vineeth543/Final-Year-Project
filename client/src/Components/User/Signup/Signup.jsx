import React, { useState } from "react";
import { FcEmptyBattery } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const formStyle = {
    width: "40rem",
    height: "35rem",
  };
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    if (
      name === "" ||
      gender === "" ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    const newUser = {
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      password: password,
    };
    axios
      .post("http://localhost:8080/user/signup", newUser)
      .then((result) => {
        alert(result.data);
        nav("/user/login");
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  return (
    <>
      <div className="flex align-items items-center justify-center mt-10 gap-40">
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
                id="name"
                placeholder="Fullname"
                className="text-black"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-start gap-8">
              <label htmlFor="gender">Gender:</label>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  value="male"
                  id="gender"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
                <input
                  type="radio"
                  id="gender"
                  value="female"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
                <input
                  type="radio"
                  value="other"
                  id="gender"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-start gap-3">
              <label htmlFor="mobile">Mobile No:</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Mobile No"
                className="text-black"
                required
                onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex items-center justify-center gap-4">
              Already Have Account..!? <Link to="/user/login">Signin</Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                className="bg-blue-900 p-2 px-4 rounded-2xl"
                onClick={() => Signup()}
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
      <div className="flex h-16 align-items items-center justify-center mt-14">
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
