
# Human Pose Estimation (HPE)
Introducing our web application, which enables anytime, anywhere access to workouts. You may exercise with confidence while the app automatically counts and monitors your repetitions thanks to our pose detecting feature. It's never been simpler to adopt a healthy lifestyle and fit daily exercise into your schedule. Start your fitness adventure right away and enjoy the benefits and ease of working out with our nifty web application. Let's put our health first and live healthier lives by working out frequently.

![HPE Platform Thumbnail](./Frontend/public/img/workout_ss1.png)

Pose Detector and Classification is a feature that the AI Workout Assistant program implements, and it runs fully on the client side. This indicates that the user's gadget does not transmit any image data. After the analysis, the application automatically deletes any movies or photographs it processed. By limiting the possibility of illegal access or data breaches and keeping all critical information within the user's device, this strategy guarantees user privacy and data protection.

## How it Work
The AI Workout Assistant program processes picture data from movies or webcams using a pose detector powered by the MoveNet model. Keypoints are produced by the position detector and are used as input to categorize various workout types and are crucial for figuring out training repetitions. The classification task is subsequently carried out by a Dense Neural Network (DNN) model, which receives the keypoints. It's crucial to remember that all picture data processing, including posture detection and classification, takes place locally on the user's device, protecting the confidentiality and privacy of their data.

![How AI Workout Work](./Frontend/public/img/processing_pipeline_black.png)

## Training of the Models
To determine whether or not to exercise, the model uses binary categorization. For instance, whether to perform a push-up or not. You can choose any push-up video with a full body for a positive class. Additionally, you can choose any solo human dancing video for the negative class. Upload those videos using the advanced settings under the assistance section. For each of the data points, you will receive a CSV file. then open this ![colab](https://github.com/PLEX-GR00T/Pose_Estimation/blob/main/Workout_Pose_2D_17Keypoints_Squats.ipynb) and adhere to the instructions after gathering both good and negative data. The model will be sent to you in tfjs format. 
### 1) Squats

<p float="left">
  <img src="./Frontend/public/img/squat_Accuracy.png" width="400" height="300" />
  <img src="./Frontend/public/img/squat_loss.png" width="400" height="300" /> 
</p>

### 1) Dumbbell High Curls

<p float="left">
  <img src="Frontend/public/img/dumbbell_curls_accuracy.png" width="400" height="300" />
  <img src="Frontend/public/img/dumbbell_curls_loss.png" width="400" height="300" /> 
</p>

## Recommending Excercises

This module offers exercises tailored to the users' preferences. It provides accurate exercise postures and various types of exercises. Users can choose which body part they want to focus on, such as the neck, back, arms, chest, and more.

Once users select a specific exercise, they can access a detailed explanation of how to perform it correctly. Additionally, they will receive recommendations for YouTube videos, exercises targeting similar muscles, and exercises using similar equipment. These resources aim to provide users with more information, a wider range of exercises, and continuous motivation throughout their journey towards a healthier lifestyle.

## How to Run Locally
- Prerequisites: you'll need to have [Git](https://git-scm.com/), [Node](https://nodejs.org/), and [NPM](https://www.npmjs.com/package/npm) installed and running on your machine.
- Open terminal/powershell/command prompt then clone this repository  
    ```Bash
    git clone https://github.com/yashwanth6/295A_HPE.git
    cd 295A_HPE
    ```
- For the Backend:
    ```Bash
    cd Backend
    node index.js
    ```
- Go to Frontend and install dependencies:
    ```Bash
    cd Frontend
    npm install
    ```
    - If there is an ERROR
        ``` Bash
        npm ERR! code ERESOLVE
        npm ERR! ERESOLVE could not resolve
        npm ERR!
        npm ERR! While resolving: @tensorflow-models/pose-detection@2.0.0 
        npm ERR! Found: @mediapipe/pose@0.5.1635988162
        npm ERR! node_modules/@mediapipe/pose
        npm ERR!   @mediapipe/pose@"^0.5.1635988162" from the root project
        ```
    - Apply Command:
        ``` Bash
        npm config set legacy-peer-deps true
        ```
- In the Frontend add this comand to run this app locally.
    ```Bash
    npm run start-dev
    ```
- Then open http://localhost:8080 to see your app.

## Limitations
- 3D angle is not implemented yet
    - Planning: To investigate lightweight models capable of generating 3D keypoints, such as BlazePose, MoVNect, LHPE-nets, or other model.
- Facing low FPS because of the hight quality of videos
    - You may compare and watch the frames per second by uploading videos with high and low resolutions.
 
## References
- [Pose Detection with TFJS](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
- [MoveNet Documentation](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection/src/movenet)
- [MoveNet in TFHub](https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4)
- [Pose Classification](https://developers.google.com/ml-kit/vision/pose-detection/classifying-poses)
- [Other Models for 3D angle](https://paperswithcode.com/task/3d-human-pose-estimation)
- Original video used in training and testing
    -   [push-up](https://www.youtube.com/watch?v=OKn_6Me96Yc)
    -   [squating](https://www.youtube.com/watch?v=LSj280OEKUI)
    -   [Lunges](https://www.istockphoto.com/video/asian-woman-healthy-she-exercises-outdoors-she-does-leg-lunge-poses-gm1302538706-394248383)
    -   [Jumping-Jacks](https://www.istockphoto.com/video/woman-doing-exercises-in-the-beach-a-dark-haired-woman-coach-in-a-sporty-short-top-gm1157341184-315766126)
    -   [Dumbbell-High-Curls](https://www.jefit.com/exercises/706/Dumbbell-High-Curl)

## TODOs
- Write unit test
- Add audio effects when the exercise is not correct
- Create better dataset to train our model along with data augmentation techniques
- Generate the user activity tracking graphs for their own profile
- Calculate the calories and suggest diet plan
