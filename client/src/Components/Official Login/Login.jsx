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
    if (phone === "" || password === "") alert("Please fill all the fields");

    const Official = {
      role: role,
      phone: phone,
      password: password,
    };

    console.log(Official);

    console.log(role);
    axios
      .post("http://localhost:8080/login", Official)
      .then((result) => {
        if (result.data.status === "success") {
          alert(result.data.msg);
          role === "PDO"
            ? nav("/admin")
            : role === "SECRETARY"
            ? nav("/secretary")
            : nav("/president");
          // localStorage.setItem("OfficialloggedIn", "true");
        } else alert(result.data.msg);
      })
      .catch((err) => {
        alert(err.data);
      });
    setRole("");
    setPhone("");
    setPassword("");
  };

  return (
    <>
      <div className="flex align-items items-center justify-center gap-40 bg-cyan-200">
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
            <h1 className="font-bold text-4xl text-black text-center">
              Official Login
            </h1>
            <div className="flex items-center justify-center gap-5">
              <label htmlFor="role">Select Role:</label>
              <select
                name="role"
                id="role"
                className="text-black px-2 w-44"
                onChange={(e) => getRole(e.target.value)}
              >
                <option value="" selected disabled>
                  Select Your Role
                </option>
                <option value="SECRETARY">Secretary</option>
                <option value="PDO">PDO</option>
                <option value="PRESIDENT">President</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-3">
              <label htmlFor="phone">Username:</label>
              <input
                type="text"
                name="phone"
                id="phone"
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
              <button
                type="submit"
                className="bg-blue-900 p-2 px-4 rounded-2xl"
                onClick={login}
              >
                Login
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
    </>
  );
};

export default Login;
