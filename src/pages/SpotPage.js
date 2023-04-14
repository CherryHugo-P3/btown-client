import { useState, useEffect } from "react";
import axios from "axios";
import SpotCard from "../components/SpotCard";

const API_URL = "http://localhost:5005";

function SpotPage() {
    const [spots, setSpots] = useState([]);

    const getAllSpots = () => {
        axios
            .get(`${API_URL}/spots`)
            .then((response) => setSpots(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllSpots();
    }, []);

    return (
        <div className="SpotPage">
            {spots.map((spot) => (
              <SpotCard key={spot._id} {...spot} />  
            ))}
        </div>
    );
}

export default SpotPage;