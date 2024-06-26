import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

	const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/register", {
        username,
        password,
      });
      setUser({ username });
      window.localStorage.setItem("token", data.token);
			navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold pb-3">Register</h1>
      <form className="flex flex-col gap-3" onSubmit={handleRegister}>
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
          Register
        </button>
      </form>
    </div>
  );
}

