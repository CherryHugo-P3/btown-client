import { useState, useEffect } from "react";
import axios from "axios";
import CreateSpot from "../components/CreateSpot";

const API_URL = "http://localhost:5005";

function MyspotsPage() {
  const [myspots, setMyspots] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/myspots`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setMyspots(response.data))
      .catch((error) => console.log(error));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  const refreshMyspots = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/myspots`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) =>
        setMyspots(response.data.filter((m) => m.user._id === userId))
      )
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>My Spots</h1>
      <CreateSpot refreshSpots={refreshMyspots} />
      {myspots.map((m) => (
        <div key={m._id}>
          <h2>{m.spot.title}</h2>
          <p>{m.spot.description}</p>
          <img src={m.spot.image} alt={m.spot.title} />
        </div>
      ))}
    </div>
  );
}

export default MyspotsPage;