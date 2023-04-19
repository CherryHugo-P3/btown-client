import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function SpotDetailsPage() {
    const { spotId } = useParams();
    const [spot, setSpot] = useState(null);

    const getSpotDetails = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/api/spots/${spotId}`)
            .then((response) => setSpot(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getSpotDetails();
    }, []);

    return (
        <div className="SpotDetailsPage">
            <h1>{spot.name}</h1>
        </div>
    );

}

export default SpotDetailsPage;