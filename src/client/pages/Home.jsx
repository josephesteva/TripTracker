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
      <div>Browse Destinations</div>
      <div>
        {destinations.map((destination) => {
          return (
            <div key={destination.id}>
              <h3>{destination.name}</h3>
              <p>{destination.location}</p>
              <p>{destination.description}</p>
            </div>
          );
        })}
      </div>
      <Link to="/add">Add Destination</Link>
    </div>
  );
}

export default Home;
