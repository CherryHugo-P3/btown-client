import axios from "axios";
import CreateCollection from "../components/CreateCollection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import AllCollections from "../components/AllCollections"



function CollectionList() {
  const [collection, setCollection] = useState([]);
  const { isLoggedIn } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken');

  useEffect(() => {
    getMyCollections();
  }, []);

  const getMyCollections = () => {
    
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/mycollection`, { headers: { Authorization: `Bearer ${storedToken}` }})
       
      .then((response) => setCollection(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>

      {isLoggedIn && (
        <>
          <h1>My Collections</h1>
          <CreateCollection refreshCollections={getMyCollections} />

          {collection.map((collection) => (
            <div key={collection._id}>
              <br />
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
            </div>
          ))}
          <AllCollections />
        </>
      )}
        

    </div>
    
  )


}

export default CollectionList;
