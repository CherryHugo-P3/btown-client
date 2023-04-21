import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";


const API_URL = "http://localhost:5005";

function CreateSpot({ refreshSpots }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = { name, description, category, image };

    
  
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/spots`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        const createdSpot = response.data

        setName("");
        setDescription("");
        setCategory("");
        setImage("");
        refreshSpots();
        navigate("/spots");
        return createdSpot
      })
      .catch((error) => console.log(error));
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
   
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/spots/upload`, uploadData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("image", response.data.image)
        setImage(response.data.image)
        
      });
  };

  return (
    <>
  <h2 className="fw-light">Create a new Spot and add it to your collection.</h2>
  <Card style={{ width: '28rem', margin: '0 auto' }}>
    <Card.Body>
      <Form onSubmit={handleSubmit}>     
        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control 
            type="file" 
            id="image"
            name="image"
            onChange={handleFileUpload}  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category:</Form.Label>
          <Form.Control 
            as="select"
            id="category" 
            name ="category" 
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">-Select a category-</option>
            <option value="Food">Food</option>
            <option value="Viewpoint">Viewpoint</option>
            <option value="Others">Others</option>
          </Form.Control>
          <hr />
        </Form.Group>
        <Button type="submit" className="btn btn-primary">Create a Spot</Button>
      </Form>
    </Card.Body>
  </Card>
</>
  );
}

export default CreateSpot;

