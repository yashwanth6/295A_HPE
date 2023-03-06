import cv2
import mediapipe as mp
from flask_pymongo import PyMongo
from datetime import datetime


class SquatCounter:

    def __init__(self, app, socketio):
        self.app = app
        self.socketio = socketio
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_pose = mp.solutions.pose
        self.pose = None
        self.count = 0
        self.mongo = PyMongo(app)

    def detect_squats(self, image):
        with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
            self.pose = None
            self.result = pose.process(image)
            if self.result.pose_landmarks:
                self.mp_drawing.draw_landmarks(image, self.result.pose_landmarks, self.mp_pose.POSE_CONNECTIONS)
                self.pose = self.result.pose_landmarks
                left_knee_angle = self.get_angle(self.pose, self.mp_pose.PoseLandmark.LEFT_KNEE, self.mp_pose.PoseLandmark.LEFT_HIP, self.mp_pose.PoseLandmark.LEFT_ANKLE)
                right_knee_angle = self.get_angle(self.pose, self.mp_pose.PoseLandmark.RIGHT_KNEE, self.mp_pose.PoseLandmark.RIGHT_HIP, self.mp_pose.PoseLandmark.RIGHT_ANKLE)
                if left_knee_angle is not None and right_knee_angle is not None:
                    if left_knee_angle > 160 and right_knee_angle > 160:
                        self.count += 1
                        self.socketio.emit("squat count", self.count)
                        self.draw_squat_count(image)

    def get_angle(self, pose_landmarks, joint1, joint2, joint3):
        joint1_coord = self.get_coord(pose_landmarks, joint1)
        joint2_coord = self.get_coord(pose_landmarks, joint2)
        joint3_coord = self.get_coord(pose_landmarks, joint3)
        if joint1_coord is not None and joint2_coord is not None and joint3_coord is not None:
            radians = self.calculate_angle(joint1_coord, joint2_coord, joint3_coord)
            return int(radians * 180.0 / 3.14)
        else:
            return None

    def get_coord(self, pose_landmarks, joint):
        landmark = pose_landmarks.landmark[joint]
        if landmark.visibility < 0.1:
            return None
        height, width, _ = image.shape
        return int(landmark.x * width), int(landmark.y * height)

    def calculate_angle(self, a, b, c):
        radians = abs(math.atan2(c[1] - b[1], c[0] - b[0]) - math.atan2(a[1] - b[1], a[0] - b[0]))
        if radians > 3.14:
            radians = 2 * 3.14 - radians
        return radians

    def draw_squat_count(self, image):
        cv2.putText(image, f"Squats: {self.count}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

    def save_to_mongo(self):
        date = datetime.now()
        self.mongo.db.squat_history.insert_one({"date": date, "count": self.count})

    def draw_squats(self, image):
    # Convert the image to RGB
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        # Get the pose landmarks from the image
        pose_landmarks = self.pose_detector.process_image(image)
        console.log(pose_landmarks)

        # If the pose landmarks are not detected, return the original image
        if not pose_landmarks:
            return image

        # Calculate the squat count based on the pose landmarks
        squats = self.calculate_squats(pose_landmarks)

        # Draw the squat count on the image
        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 1
        color = (0, 255, 0)
        thickness = 2
        text = f"Squats: {squats}"
        text_size, _ = cv2.getTextSize(text, font, font_scale, thickness)
        text_x = image.shape[1] - text_size[0] - 10
        text_y = text_size[1] + 10
        cv2.putText(image, text, (text_x, text_y), font, font_scale, color, thickness)

        # Draw the pose landmarks on the image
        self.pose_detector.draw_landmarks(image, pose_landmarks)

        # Convert the image back to BGR
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        return image
