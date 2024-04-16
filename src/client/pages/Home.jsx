import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [destinations, setDestinations] = useState([]);

  async function fetchDestinations() {
    try {
      const { data } = await axios.get("/api/destinations");
      console.log(data);
      setDestinations(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold pb-3">Browse Destinations</div>
      <div className="flex flex-wrap justify-around">
        {destinations.map((destination) => {
          return (
            <div key={destination.id} className="border border-blue-500 rounded-md p-5 my-5 w-5/12 text-center">
              <h3>{destination.name}</h3>
              <p>{destination.country}</p>
            </div>
          );
        })}
      </div>
      <Link to="/add" className="border border-black px-5 py-1">Add Destination</Link>
    </div>
  );
}

export default Home;
