
# AI Workout Assistant
An web application to help everyone do workout wherever and whenever. Supported by the pose detector feature to analyze every pose and auto count the number of repetitions made. So, let's create a healthy life by do workout every day!

![AI Workout Assistant Thumbnail](./public/img/social-media-thumbnail.png)

Pose Detector and Classification in the AI Workout Assistant application fully runs on the Client side, so no image data comes out of the user's device. Videos or images processed by the program will be automatically deleted.
## How it Work
Image data which is obtained from video or webcam will be processed by pose detector using the MoveNet model to generate keypoints. Keypoints are used for repetition calculations and input for classifying workout types with Dense Neural Network (DNN) model.

![How AI Workout Work](./public/img/how-it-work-ai-workout.png)

## How to Run Locally
- Prerequisites: you'll need to have [Git](https://git-scm.com/), [Node](https://nodejs.org/), and [NPM](https://www.npmjs.com/package/npm) installed and running on your machine.
- Open terminal/powershell/command prompt then clone this repository  
    ```Bash
    git clone https://github.com/reevald/ai-workout-assistant.git
    cd ai-workout-assistant
    ```
- Install dependencies
    ```Bash
    npm install
    ```
- Once the installation is done, you can run the app locally
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
