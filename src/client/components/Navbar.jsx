import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function updateUser() {
    const token = window.localStorage.getItem("token");
    if (token) {
      setUser({ username: "logged in" });
    }
    console.log(token);
  }

  function handleLogout() {
    window.localStorage.removeItem("token");
    setUser(null);
		navigate('/')
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <>
      <div className="bg-blue-200 flex justify-between p-5 border-2 border-blue-200 border-b-blue-400">
        <h1 className="text-4xl font-bold">Trip Tracker</h1>
        <div className="flex gap-5 border-red-500">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md")}
          >
            <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
              Home
            </h3>
          </NavLink>
          {user?.username ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md")}
              >
                <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
                  Profile
                </h3>
              </NavLink>
              <button className="bg-blue-400 rounded-md" onClick={handleLogout}>
                <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
                  Logout
                </h3>
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md")}
              >
                <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
                  Login
                </h3>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md")}
              >
                <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
                  Register
                </h3>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
