import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Modal, Carousel } from "react-bootstrap";

export const ExercisePage = ({match}) => {

  const [activities, setActivities] = useState([]);
  const exid = match.params.exerciseid;


  useEffect(async () => {
    try {
       console.log(exid);
       
       await axios
       .post("/exercise/getactivitybyid",{exid})
       .then((response) => {
         console.log(response.data);
         setActivities(response.data);
       })
   

      



      //setActivities(act);
    } catch (error) {
      console.log(error);
    }
  }, []);

  

  return (
    <body>
      <p>{activities.exerciseName}</p>
      <p>hshshshhshs</p>
    </body>
  )
}



export default ExercisePage;