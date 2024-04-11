import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-blue-200 flex justify-between p-5 border-2 border-blue-200 border-b-blue-400">
        <h1 className="text-4xl font-bold">Trip Tracker</h1>
        <div className="flex gap-5 border-red-500">
          <NavLink to="/" className={({isActive}) => isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md"}>
            <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
              Home
            </h3>
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md"}>
            <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
              Profile
            </h3>
          </NavLink>
          <NavLink to="/login" className={({isActive}) => isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md"}>
            <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
              Login
            </h3>
          </NavLink>
          <NavLink to="/register" className={({isActive}) => isActive ? "bg-blue-600 rounded-md" : "bg-blue-400 rounded-md"}>
            <h3 className="py-2 px-5 text-lg font-semibold border border-black rounded-md hover:text-white hover:border-white">
              Register
            </h3>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
