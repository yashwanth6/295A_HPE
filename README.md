
# Human Pose Estimation (HPE)
Introducing our web application, which enables anytime, anywhere access to workouts. You may exercise with confidence while the app automatically counts and monitors your repetitions thanks to our pose detecting feature. It's never been simpler to adopt a healthy lifestyle and fit daily exercise into your schedule. Start your fitness adventure right away and enjoy the benefits and ease of working out with our nifty web application. Let's put our health first and live healthier lives by working out frequently.

![HPE Platform Thumbnail](./public/img/social-media-thumbnail.png)

Pose Detector and Classification is a feature that the AI Workout Assistant program implements, and it runs fully on the client side. This indicates that the user's gadget does not transmit any image data. After the analysis is finished, the application automatically deletes any movies or photographs that it processed. By limiting the possibility of illegal access or data breaches and keeping all critical information within the user's device, this strategy guarantees user privacy and data protection.

## How it Work
The AI Workout Assistant program processes picture data from movies or webcams using a pose detector powered by the MoveNet model. Keypoints are produced by the position detector and are used as input to categorize various workout types and are crucial for figuring out training repetitions. The classification task is subsequently carried out by a Dense Neural Network (DNN) model, which receives the keypoints. It's crucial to remember that all picture data processing, including posture detection and classification, takes place locally on the user's device, protecting the confidentiality and privacy of their data.

![How AI Workout Work](./public/img/how-it-work-ai-workout.png)

## How to Run Locally
- Prerequisites: you'll need to have [Git](https://git-scm.com/), [Node](https://nodejs.org/), and [NPM](https://www.npmjs.com/package/npm) installed and running on your machine.
- Open terminal/powershell/command prompt then clone this repository  
    ```Bash
    git clone [https://github.com/reevald/ai-workout-assistant.git](https://github.com/yashwanth6/295A_HPE/tree/main)
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
    - Once the installation is done, you can run the app locally (In the Frontend)
        ```Bash
        npm run start-dev
        ```
- Then open http://localhost:8080 to see your app.

## Limitations
- Cannot cover 3D angle yet
    - Planning: research lightweight model that can generate 3D keypoints like BlazePose, MoVNect, LHPE-nets or [other model](https://paperswithcode.com/task/3d-human-pose-estimation).
- Currently the high resolution makes fps slower
    - You can try upload videos with high and low resolution then compare them and watch the fps.
    - Solution to webcam used: using limit with fixed "real" resolution 640x360. To display variate resolution screen, in this case we are using css manipulation.

## References
- Pose Detection with TFJS (https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
- MoveNet Documentation (https://github.com/tensorflow/tfjs-models/tree/master/pose-detection/src/movenet)
- MoveNet in TFHub (https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4)
- Pose Classification (https://developers.google.com/ml-kit/vision/pose-detection/classifying-poses)
- Original video (in image above)
    -   Man push-up (https://www.youtube.com/watch?v=OKn_6Me96Yc)
    -   Woman squating (1) (https://www.youtube.com/watch?v=LSj280OEKUI)
    -   Woman squating (2) (https://www.youtube.com/watch?v=QifjltKUMCk)

## TODOs
- Write documentations
- Write unit test
- [Done] Add audio effect (timer and movement direction)
- Data Augmentation (flip horizontal, scale, shear and shift) to try improve metric pose classification model (accuration)
- Convert to components (prefer using framework like react js)
