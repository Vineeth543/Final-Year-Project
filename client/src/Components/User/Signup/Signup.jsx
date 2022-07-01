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
  const [confirmPassword, setConfirmPassword] = useState("");

  const Signup = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      gender === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else if (confirmPassword !== password) {
      alert("Password and confirm password does not match");
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
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Final-Year-Project/main/client/src/Images/water.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <div
          className="flex flex-col items-center justify-center bg-sky-500 rounded-3xl"
          style={formStyle}
        >
          <h1 className="font-bold text-4xl text-black">SignUp</h1>
          <form
            className="flex flex-col justify-center gap-8 text-white font-semibold my-5"
            onSubmit={Signup}
          >
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
                  id="male"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
                <input
                  type="radio"
                  value="female"
                  id="female"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
                <input
                  type="radio"
                  value="other"
                  id="other"
                  name="gender"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />
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
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              Already Have Account..!?
              <Link to="/user/login" className="font-semibold text-lg">
                Signin
              </Link>
            </div>
            <button className="m-auto bg-blue-900 py-1 px-2 rounded-lg hover:bg-blue-700 focus:ring ring-blue-400">
              Submit
            </button>
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

export default Signup;
