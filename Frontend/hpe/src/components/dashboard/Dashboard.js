import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = () => {
    
    const [activities, setActivities] = useState([]);

    

  useEffect(async () => {
    try {
      
      const act = await (await axios.get("/exercise/getallactivities")).data;
      console.log(act);
      setActivities(act);
    } catch (error) {
      console.log(error);
    }
  }, []);
        
      

    return (
         <body>
            <p>hhshshhs</p>
        <div className="row justify-content-center">
          
              {activities.map((activity) => {
                return (
                    <div className="col-md-8" data-aos='zoom-in'>
                      <p>{activity.exerciseName}</p> 
                      <p>{activity.exerciseType}</p> 
                      <hr></hr>
                    </div>
                );
              })}
          
        </div>
        </body>
    )
}



export default Dashboard;