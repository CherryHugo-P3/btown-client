import {  useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


 
function CollectionDetailsPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [spots, setSpots] = useState([]);
  
  const location = useLocation()
  const collectionId = location.pathname.split('/')[2];
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();  
 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const collection = response.data;
        setName(collection.name);
        setDescription(collection.description);
        setSpots(collection.spots);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    
  }, [collectionId]);
  
  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { name, description };
 
    // Make a PUT request to update the project
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/api/collection/${collectionId}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/collection`)
      });
  };
  
  // Make a DELETE request to delete the project
  const deleteCollection = () =>{
 
    axios
    .delete(`${process.env.REACT_APP_SERVER_URL}/api/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(() => {
        navigate(`/collection`)
    })
    .catch((err) => console.log(err));

};

  return (
    <div className="CollectionDetailsPage">
      <h3>Edit the Collection</h3>
 
      <form onSubmit={handleFormSubmit}>      {/*  <== UPDATE  */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update</button>
        <button onClick={deleteCollection}>Delete</button>
      </form>

      { spots.map(spot => (
        <div>
          <br />
          <div className="spot">{spot.name}</div>
          <div className="spot">{spot.description}</div>
          <div className="spot">{spot.category}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
 
export default CollectionDetailsPage;