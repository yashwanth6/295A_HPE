import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Modal, Carousel } from "react-bootstrap";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <body>

      <div className="row justify-content-center">

        {activities.map((activity) => {
          return (
            <div className="col-md-8" data-aos='zoom-in'>
              {/* <p>{activity.exerciseName}</p>
              <p>{activity.exerciseType}</p>
              <hr></hr> */}
              <div className="row m-3 p-3 bs">
                <div className="col-md-4">
                  <img src={activity.imageurls[0]} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h1>{activity.exerciseName}</h1>
                  <p>Parking , Reception , Free Wifi</p>
                  <p>
                    <b>Number of guests allowed : {activity.exerciseType}</b>
                  </p>
                  <p>
                    <b>Contact : </b>
                    
                  </p>
                  <p>
                    <b>Type : </b>
                  </p>

                  <div style={{ float: "right" }}>
                     <Link to={`/exercise/${activity._id}/`}>
                      <button className="btn btn-dark m-2">Book Now</button>
                    </Link>

                    <button className="btn btn-danger m-2" onClick={handleShow}>
                      View Details
                    </button>
                  </div>
                </div>

                <Modal show={show} onHide={handleClose} size="lg" data--aos='zoom-in'>
                  <Modal.Header>
                    <Modal.Title>{activities.exerciseName}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Carousel nextLabel="" prevLabel="">
                      {activity.imageurls.map((url) => {
                        return (
                          <Carousel.Item>
                            <img
                              src={url}
                              className="img-fluid"
                              style={{ height: "400px" }}
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                    <p>{activities.exerciseType}</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>
                      CLOSE
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          );
        })}

      </div>
    </body>
  )
}



export default Dashboard;