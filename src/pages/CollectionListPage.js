import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5005";

function CollectionList() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getMyCollections();
  }, []);

  const getMyCollections = () => {
    axios.get(`${API_URL}/collection`)
      .then((response) => setCollections(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>My Collections</h1>
      {collections.map((collections) => (
        <div key={collections._id}>
        <h2>{collections.name}</h2>
        </div>
      ))}


    </div>
    
  )


}

export default CollectionList;
