
import axios from "axios";
import { useEffect, useState } from "react";



function AllCollections() {
  const [collections, setCollections] = useState([]);

  const storedToken = localStorage.getItem('authToken');

  useEffect(() => {
    getAllCollections();
  }, []);

  const getAllCollections = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => setCollections(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>All Collections</h1>
      {collections.map((collection) => (
        <div key={collection._id}>
          <br />
          <h2>{collection.name}</h2>
          <p>{collection.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCollections;