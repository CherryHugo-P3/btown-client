import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreateSpot(){
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [userId] = useState('');
    const navigate = useNavigate();
    const API_URL = "http://localhost:5005";
    const handleSubmit = (e) => {
        e.preventDefault();

        const newSpot = {
            title: title,
            description:description,
            category:category,
            image: image,
            userId: userId,
        };
        //console.log to check 
        axios
        .post(`${API_URL}/api/spots` , newSpot)
        .then( response => {
            console.log("this is my response", response);
          
        })
          
        .catch( error => console.log("error creating spot", error))


        //clear the form
        setImage("");
        setTitle("");
        setCategory("");
        setDescription("");
        navigate("/spots"); //redirect to the route
        
    }
    


    return(
        <div>
             <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }}
        />
        
  
        <label>Image: </label>
        <input 
            type="text" 
            name="img" 
            value={image} 
            onChange={(e) => { setImage(e.target.value) }}
        />
  
        <label>Category: </label>
        <input 
            type="number" 
            name="pricePerDay" 
            value={category} 
            onChange={(e) => { setCategory(e.target.value) }}
        />
        <label>Description: </label>
        <input 
            type="text" 
            name="title" 
            value={description} 
            onChange={(e) => { setDescription(e.target.value) }}
        />


        <button type='submit'>Add Spot</button>
      </form>
        </div>
    )
}

export default CreateSpot;