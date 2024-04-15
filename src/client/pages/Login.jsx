import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Login() {
	const {user, setUser} = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    console.log("username", username, "pasword: ", password);
    try {
      const { data } = await axios.post("/auth/login", {
        username,
        password,
      });
      window.localStorage.setItem("token", data.token);
			setUser({username})
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl pb-3">Login</h1>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <div>
            <p>Username: </p>
            <input
              type="text"
              placeholder="Input Username"
              className="border border-black rounded-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Password: </p>
            <input
              type="text"
              placeholder="Input Password"
              className="border border-black rounded-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="mr-auto border border-black rounded-sm px-5 py-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
