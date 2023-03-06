import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Button } from "react-bootstrap";
import axios from "axios";


const ENDPOINT = "http://localhost:5000";

function HandRaise() {
  const [count, setCount] = useState(0);
  const [cameraOn, setCameraOn] = useState(false);
  const [mongoSaved, setMongoSaved] = useState(false);
  const [socket, setSocket] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setSocket(io(ENDPOINT));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("squat count", (count) => {
        setCount(count);
      });
    }
  }, [socket]);

  const handleConnectToServer = () => {
    setCameraOn(true);
    socket.emit("connect to server");
  };

  const handleStopCamera = () => {
    setCameraOn(false);
    socket.emit("stop camera");
    if (mongoSaved === false) {
      axios.post(ENDPOINT + "/save-to-mongo", { count }).then(() => {
        setMongoSaved(true);
      });
    }
  };

  useEffect(() => {
    if (cameraOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error("Could not access camera: ", error);
        });
    } else {
      videoRef.current.srcObject = null;
    }
  }, [cameraOn]);

  return (
    <div className="App">
      <div className="container">
        <h1>Squat Counter</h1>
        <div className="video-container">
          <video ref={videoRef} width="640" height="480"></video>
        </div>
        <div className="count-container">
          <h2>{count}</h2>
          <Button variant="success" onClick={handleConnectToServer}>
            Connect to Server
          </Button>{" "}
          <Button variant="danger" onClick={handleStopCamera}>
            Stop Camera
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default HandRaise;
