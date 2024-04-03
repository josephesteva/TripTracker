import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-blue-200 flex justify-between p-5 border-solid border-2 border-b-blue-400">
        <h1 className="text-4xl font-bold">Trip Tracker</h1>
        <div className="flex gap-5 border-red-500">
          <Link to="/">
            <h3 className="py-2 px-5 text-lg font-semibold bg-blue-400 border border-black rounded-md hover:bg-blue-600 hover:text-white hover:border-white hover:scale-125">Home</h3>
          </Link>
          <Link to="/profile">
            <h3 className="py-2 px-5 text-lg font-semibold bg-blue-400 border border-black rounded-md hover:bg-blue-600 hover:text-white hover:border-white hover:scale-125">Profile</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
