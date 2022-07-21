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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Signup = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
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
      firstName: firstName,
      lastName: lastName,
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
      <div className="flex items-center justify-center mt-10 gap-40">
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/water.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <form
          className="flex flex-col w-[40rem] h-[37rem] bg-sky-500 rounded-3xl gap-8 text-white font-semibold px-36 py-4"
          onSubmit={Signup}
        >
          <h1 className="font-bold text-4xl text-black text-center">SignUp</h1>
          <div className="flex justify-between">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
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
          <div className="flex justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="mobile">Mobile No:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Mobile No"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="text-black pl-1 rounded outline-none border border-gray-300 focus:border-orange-400"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <h3 className="text-center">
            Already Have Account..!?{" "}
            <Link
              to="/user/login"
              className="font-semibold text-lg"
            >
              Login
            </Link>
          </h3>
          <button
            type="submit"
            className="m-auto bg-blue-700 py-1 px-3 rounded hover:bg-blue-900 focus:ring ring-blue-700"
          >
            Signup
          </button>
        </form>
        <div>
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/tree.png"
            alt="save tree"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex h-16 items-center justify-center mt-14">
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
      <div className="flex flex-col h-40 items-center justify-center border">
        <FcEmptyBattery className="w-fll h-full text-6xl" />
        <h1>No Data</h1>
      </div>
    </>
  );
};

export default Signup;
