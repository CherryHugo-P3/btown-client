import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CreateSpot from "../components/CreateSpot";
import { AuthContext } from "../context/auth.context";
//import SpotCard from "../components/SpotCard";

import Card from 'react-bootstrap/Card';




function SpotPage() {
  const [spots, setSpots] = useState([]);
  const [collection, setCollection] = useState([]);
  const [collectionId, setCollectionId] = useState();
  const [spotId, setSpotId] = useState();

  const {isLoggedIn } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken');


  const getAllSpots = () => {

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/spots`)
      .then((response) => setSpots(response.data))
      .catch((error) => console.log(error));
  };

  const addToCollection = (event) => {
    event.preventDefault();
    console.log(collectionId, spotId)
    axios.put(`${process.env.REACT_APP_SERVER_URL}/api/collection/${collectionId}/${spotId}`, {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => setSpots(response.data))
    .catch((error) => console.log(error));
  }

  const getMyCollections = () => {
    
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/mycollection`, { 
      headers: { Authorization: `Bearer ${storedToken}` }
    })
       
      .then((response) => setCollection(response.data))
      .catch((error) => console.log(error));
  };

  
  useEffect(() => {
    getMyCollections();
    getAllSpots();
  }, []);

  return (
    <div>
      <h1>All Spots</h1>
      
      {isLoggedIn && (
        <>
            <CreateSpot refreshSpots={getAllSpots} />
        </>
      )}
{/* {spots.map((spot) => (
        <div key={spot._id}>
          <h2>{spot.name}</h2>
          <p>{spot.description}</p>
          <p>{spot.category}</p>
          <img src={spot.image} alt={spot.name} />
        
           // form
          // select 
            //collections.map
          //   options collection._id -->name
          // input hidden spot._id 
          // button submit 
          <form onSubmit= { (event) =>{addToCollection(event)} }>
            <select name="collectionId" onChange={(event) => {setCollectionId(event.target.value)}}> 
              {collection.map((collection) => {
                return <option value={collection._id}>{collection.name}</option>
              } )}
            
            

            </select>
            <button type="submit" onClick={() => setSpotId(spot._id)}>Add to collection</button>
          </form>  
        </div>
      ))}
    </div>
  );
}

export default SpotPage; */}


      {spots.map((spot) => (
        <div key={spot._id} >
         
        <Card>
        <Card.Body>
        <Card.Title>{spot.name}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={spot.image} alt={spot.name}/>
        <Card.Text>{spot.description}</Card.Text>
        <Card.Text>{spot.category}</Card.Text>
        </Card>


          <form onSubmit= { (event) =>{addToCollection(event)} }>
            <select name="collectionId" onChange={(event) => {setCollectionId(event.target.value)}}> 
              {collection.map((collection) => {
                return <option value={collection._id}>{collection.name}</option>
              } )}
            
            

            </select>
            <button type="submit" onClick={() => setSpotId(spot._id)}>Add to collection</button>
          </form>  
        </div>
      ))}
    </div>
  );
}

export default SpotPage;
