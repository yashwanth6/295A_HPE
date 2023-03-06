import os
from flask import Flask, render_template, Response
from flask_socketio import SocketIO, emit
from flask_pymongo import PyMongo
from squat_counter import SquatCounter
import mediapipe as mp
import cv2
import numpy as np
import base64

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config["MONGO_URI"] = "mongodb://localhost:27017/squatdb"
mongo = PyMongo(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Initialize pose detection
mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

# Initialize squat counter
squat_counter = SquatCounter(app, socketio)

# Route for index page
@app.route('/')
def index():
    return render_template('index.html')

# Route for video feed

def gen():
    cap = cv2.VideoCapture(0)
    with mp_pose.Pose(min_detection_confidence=0.1, min_tracking_confidence=0.1) as pose:
        while True:
            success, image = cap.read()
            if not success:
                print("Ignoring empty camera frame.")
                continue

            # Flip the image horizontally for a more natural-looking display
            image = cv2.flip(image, 1)

            # Convert the image to RGB
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            # Process the image and detect poses
            results = pose.process(image)

            # Draw the pose on the image
            mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

            # Send the pose image to the client
            _, img_encoded = cv2.imencode('.png', image)
            img_base64 = base64.b64encode(img_encoded).decode('utf-8')
            emit('pose', {'image': img_base64}, broadcast=True)

            # Update the squat count
            squat_counter.handlePoseDetection(results.pose_landmarks)

            # Draw the squat count on the image
            squat_image = squat_counter.draw_squats(image)
            _, squat_encoded = cv2.imencode('.png', squat_image)
            squat_base64 = base64.b64encode(squat_encoded).decode('utf-8')
            emit('squats', {'image': squat_base64}, broadcast=True)

            if cv2.waitKey(5) & 0xFF == 27:
                break

    cap.release()
    cv2.destroyAllWindows()

@app.route('/video_feed')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

# Route for stopping the camera and sending squat count to database
@app.route('/stop_camera', methods=['POST'])
def stop_camera():
    squat_count = squat_counter.get_squat_count()
    mongo.db.squats.insert_one({'count': squat_count})
    return 'OK'

if __name__ == '__main__':
    socketio.run(app, debug=True)
