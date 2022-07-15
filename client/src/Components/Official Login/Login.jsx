import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const formStyle = {
    width: "40rem",
    height: "28rem",
  };
  const nav = useNavigate();

  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const getRole = (role) => {
    role === "PDO"
      ? setRole("PDO")
      : role === "SECRETARY"
      ? setRole("SECRETARY")
      : setRole("PRESIDENT");
  };

  const login = (e) => {
    e.preventDefault();

    if (role === "" || phone === "" || password === "") {
      alert("Please fill all the fields");
      return;
    } else if (!Number(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const Official = {
      role: role,
      phone: phone,
      password: password,
    };

    axios
      .post("http://localhost:8080/login", Official)
      .then((result) => {
        if (result.data.status === "success") {
          alert(result.data.msg);
          localStorage.setItem("CCPS-Official-loggedIn", "true");
          localStorage.setItem("CCPS-Official-Role", role);
          role === "PDO"
            ? nav("/admin/dashboard")
            : role === "SECRETARY"
            ? nav("/secretary/dashboard")
            : nav("/president/dashboard");
        } else {
          alert(result.data.msg);
        }
      })
      .catch((err) => {
        alert(err.data);
      });
      document.getElementById("official-login-form").reset();
  };

  return (
    <>
      <div className="flex align-items items-center justify-center gap-40 bg-cyan-200">
        <div className="flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/water.png"
            alt="save water"
            className="w-full h-full"
          />
        </div>
        <div
          className="flex items-center justify-center bg-sky-500 rounded-3xl"
          style={formStyle}
        >
          <form
            className="flex flex-col items-center justify-center gap-5 text-white font-semibold my-5"
            onSubmit={login}
            id="official-login-form"
          >
            <h1 className="font-bold text-4xl text-black text-center">
              Official Login
            </h1>
            <label htmlFor="role" className="text-lg">
              Select Role
            </label>
            <select
              name="role"
              id="role"
              className="text-black w-48 text-center font-semibold rounded focus:outline-orange-400"
              onChange={(e) => getRole(e.target.value)}
              defaultValue="Select Your Role"
              required
            >
              <option
                value="Select Your Role"
                disabled
                className="text-black text-center"
              >
                Select Your Role
              </option>
              <option value="SECRETARY" className="text-center font-semibold">
                Secretary
              </option>
              <option value="PDO" className="font-semibold text-center">
                PDO
              </option>
              <option value="PRESIDENT" className="font-semibold text-center">
                President
              </option>
            </select>
            <label htmlFor="phone" className="text-lg">
              Username
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Mobile No"
              className="text-black text-center rounded focus:outline-orange-400"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="text-black text-center rounded focus:outline-orange-400"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 p-2 px-4 rounded-2xl focus:ring ring-blue-700 "
            >
              Login
            </button>
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
    </>
  );
};

export default Login;
