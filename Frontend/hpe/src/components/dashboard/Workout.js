import React, { useEffect, useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import * as posenet from "@tensorflow-models/posenet"
import * as tfjs from '@tensorflow/tfjs';

/*
    Recommended reading:
        Most of our code is copied from here: https://github.com/kirstenlindsmith/PoseNet_React/blob/master/client/components/Camera.js
        Tensorflow PoseNet documentation: https://github.com/tensorflow/tfjs-models/tree/master/posenet
*/

// Gets the coordinates of a body part from the default keypoints array so we can make a map that's easier to access
function getPartPosition(keypoints, part) {
    keypoints = keypoints.keypoints
    var obj = keypoints.find(o => o.part === part);
    if (obj.score > 0.1) {
        return obj.position
    } else {
        return null;
    }
}

class Workout extends React.Component {

    // Ends workout: stops the webcam and animation, POSTs to /api/setstats to log a workout, then redirects
    doWorkout() {
        this.setState({ running: false })
        this.video.srcObject.getTracks().forEach(track => track.stop());
        if (this.state.squatReps + this.state.jumpingJackReps > 0) {
            // authFetch("/api/setstats", {
            //     method: 'post',
            //     body: JSON.stringify({
            //         reps: {
            //             squats: this.state.squatReps,
            //             jumpingJacks: this.state.jumpingJackReps
            //         },
            //         date: new Date().toISOString(),
            //         calories: this.state.calories
            //     })
            // }).then(r => r.json()).then(response => {
            //     console.log(response);
            //     this.setState({ redirect: true })
            // })
        }
    }

    // This is copied from kirstenlindsmith's code, idk how many of these the code actually uses
    static defaultProps = {
        videoWidth: 500,
        videoHeight: 500,
        flipHorizontal: true,
        showVideo: true,
        showSkeleton: true,
        showPoints: true,
        minPoseConfidence: 0.1,
        minPartConfidence: 0.5,
        maxPoseDetections: 2,
        nmsRadius: 20,
        outputStride: 16,
        imageScaleFactor: 0.5,
        skeletonColor: '#ffadea',
        skeletonLineWidth: 6,
        loadingText: 'Loading...please be patient...'
    }

    constructor(props) {
        super(props)

        // state variables for global variables
        this.state = {
            bodyInFrame: false,         // the pose classification algo will only run if the entire body is visible
            squatKeyPos: 0,             // indicates the "key position" of the user: 0 = standing, 1 = squatting; we switch between states to count reps
            jumpingKeyPos: 0,           /* 0 = standing, 1 = jumped out (feet spread out); we could probably combine squatKeyPos and jumpingKeyPos into a single
                                           keyPos variable with values 0, 1, and 2, but this is the spaghetti that ended up working for us :P */
            squatReps: 0,               // counts how many squats you did
            jumpingJackReps: 0,         // counts how many jumping jacks you did
            thighLen: 0,                // the maximum distance between hip and knee; we need this to be global
            torsoSize: 0,               // the distance between shoulders
            weight: 0,                  // user's weight
            height: 0,                  // user's height
            calories: 0,                // cumulative calories  the workout
            lowest: 10000000000,        // tracks the lowest height of the body
            pxHeight: 0,                // the distance between eye and heels; i.e. the user's height in pixels on screen
            running: true,              // if this is set to false, the pose detection loop will stop requesting new frames
            redirect: false             // if this is set to true, the render function will return a redirect to /dashboard
        }

        this.doWorkout = this.doWorkout.bind(this);
    }

    getCanvas = elem => {
        this.canvas = elem
    }

    getVideo = elem => {
        this.video = elem
    }

    async componentDidMount() {

        // load camera
        try {
            await this.setupCamera()
        } catch (error) {
            throw new Error(
                'This browser does not support video capture, or this device does not have a camera'
            )
        }

        // load PoseNet model
        try {
            this.posenet = await posenet.load()
        } catch (error) {
            throw new Error('PoseNet failed to load')
        } finally {
            setTimeout(() => {
                this.setState({ loading: false })
            }, 200)
        }

        // get the user's info (height and weight)
        // authFetch("/api/getuser").then(r => r.json()).then(response => {
        //     if (response) {
        //         console.log(response);
        //         this.setState({ weight: response.weight })
        //         this.setState({ height: response.height });
        //     }
        // })

        // start pose detection
        this.detectPose()
    }

    // idk much about the media library but this works
    async setupCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error(
                'Browser API navigator.mediaDevices.getUserMedia not available'
            )
        }
        const { videoWidth, videoHeight } = this.props
        const video = this.video
        video.width = videoWidth
        video.height = videoHeight

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'user',
                width: videoWidth,
                height: videoHeight
            }
        })

        video.srcObject = stream

        return new Promise(resolve => {
            video.onloadedmetadata = () => {
                video.play()
                resolve(video)
            }
        })
    }

    // Prepares the canvas for drawing the skeleton then actually starts pose detection
    detectPose() {
        const { videoWidth, videoHeight } = this.props
        const canvas = this.canvas
        const canvasContext = canvas.getContext('2d')

        canvas.width = videoWidth
        canvas.height = videoHeight

        this.poseDetectionFrame(canvasContext)
    }

    // Functions for drawing the skeleton
    drawPoint(canvasContext, x, y, radius = 3, color = "chartreuse") {
        canvasContext.beginPath();
        canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
        canvasContext.fillStyle = color;
        canvasContext.fill();
        canvasContext.fillStyle = 'black';
    }

    drawSegment(canvasContext, [ax, ay], [bx, by], lineWidth = 3, color = "chartreuse") {
        canvasContext.beginPath();
        canvasContext.moveTo(ax, ay);
        canvasContext.lineTo(bx, by);
        canvasContext.lineWidth = lineWidth;
        canvasContext.strokeStyle = color;
        canvasContext.stroke();
    }

    distance([ax, ay], [bx, by]) {
        return Math.hypot(ax - bx, ay - by);
    }

    // Actual pose detection/classification logic is here
    poseDetectionFrame(canvasContext) {
        const {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
            minPartConfidence,
            videoWidth,
            videoHeight,
            showVideo,
            showPoints,
            showSkeleton,
        } = this.props

        const posenetModel = this.posenet
        const video = this.video

        const findPoseDetectionFrame = async () => {

            // this is where PoseNet does its magic and gives us a list of keypoints and positions
            const pose = await posenetModel.estimateSinglePose(
                video,
                imageScaleFactor,
                flipHorizontal,
                outputStride
            )

            // draw the video image to the canvas
            canvasContext.clearRect(0, 0, videoWidth, videoHeight)

            if (showVideo) {
                canvasContext.save()
                canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight)
                canvasContext.restore()
            }

            // pos is a map of body parts to coordinates that's easier to access than PoseNet's default output
            var pos = {
                lhip: getPartPosition(pose, "leftHip"),
                rhip: getPartPosition(pose, "rightHip"),
                lknee: getPartPosition(pose, "leftKnee"),
                rknee: getPartPosition(pose, "rightKnee"),
                lshoulder: getPartPosition(pose, "leftShoulder"),
                rshoulder: getPartPosition(pose, "rightShoulder"),
                lankle: getPartPosition(pose, "leftAnkle"),
                rankle: getPartPosition(pose, "rightAnkle"),
                eye: getPartPosition(pose, "rightEye")
            }

            // console.log(pos.lhip);
            // console.log(pos.rhip);
            // console.log(pos.lknee);
            // console.log(pos.rknee);
            // console.log(pos.lshoulder);
            // console.log(pos.rshoulder);
            console.log(pos.rankle);
            console.log(pos.lankle);
            // console.log(pos.eye);







            // checks that all body parts are on frame and detectable
            if (!pos.lhip || !pos.rhip || !pos.lknee || !pos.rknee || !pos.lshoulder || !pos.rshoulder || !pos.rankle || !pos.lankle || !pos.eye) {
                this.setState({ ready: false });
                //console.log("Body not in Frame");
            } 
            if(pos.lhip && pos.rhip && pos.lknee && pos.rknee && pos.lshoulder && pos.rshoulder && pos.rankle && pos.lankle && pos.eye){
                this.state.bodyInFrame = true;
                // sets these only once (when you stand in front of the camera)
                console.log("Body is in Frame");
                this.setState({ ready: true });
                this.setState({ thighLen: Math.abs(pos.rhip.y - pos.rknee.y) })
                this.setState({ pxHeight: Math.abs(pos.eye.y - pos.rankle.y) })
            }

            console.log(this.state.bodyInFrame);

            if (this.state.bodyInFrame) {
                console.log("We are in Body Frame");
                var hipKneeDist = Math.abs(pos.rhip.y - pos.rknee.y)                // i.e. visible length of the thigh
                var newTorsoSize = Math.abs(pos.rshoulder.x - pos.lshoulder.x);     // i.e. shoulder width
                console.log(hipKneeDist);
                // if torso size is changing too much, that means the user is moving forward or backwards, so recalculate thighLen and pxHeight
                if (Math.abs(newTorsoSize - this.state.torsoSize) / this.state.torsoSize > 0.3) {
                    this.setState({ torsoSize: newTorsoSize });
                    if(pos.rhip.y != null && pos.rknee.y != null){
                    this.setState({ thighLen: Math.abs(pos.rhip.y - pos.rknee.y) })
                    }
                    if(pos.eye != null && pos.rankle != null){
                    this.setState({ pxHeight: Math.abs(pos.eye.y - pos.rankle.y) })
                    }
                }

                    let rightPosition;
                    if (pos.rankle && pos.rankle.x != null && pos.rankle.y != null) {
                    rightPosition = [pos.rankle.x, pos.rankle.y];
                    } else {
                    // Handle missing right ankle keypoint
                    rightPosition = [0, 0]; // set default position
                    }

                    let leftPosition;
                    if (pos.lankle && pos.lankle.x != null && pos.lankle.y != null) {
                    rightPosition = [pos.lankle.x, pos.lankle.y];
                    } else {
                    // Handle missing right ankle keypoint
                    leftPosition = [0, 0]; // set default position
                    }

                
                const midpointHips = [(pos.lhip.x + pos.rhip.x) / 2, (pos.lhip.y + pos.rhip.y) / 2];
                const a = this.distance(midpointHips, rightPosition);
                const b = this.distance(midpointHips, leftPosition);
                // leg angle = angle formed by the left heel, the groin (midpoint between hips), and the right heel
                var angle = Math.acos(
                    (Math.pow(this.distance(leftPosition, rightPosition), 2) - Math.pow(a, 2) - Math.pow(b, 2))
                    / (-2 * a * b)
                ) * 180. / Math.PI

                // update the lowest state variable
                if(pos.eye != null && pos.rankle != null){
                this.setState({ lowest: Math.min(this.state.lowest, Math.abs(pos.eye.y - pos.rankle.y)) })
                }

                // state switchers - we switch between states to keep track of the progression of the exercise
                console.log(this.state.squatKeyPos);
                switch (this.state.squatKeyPos) {
                    case 0:
                        // if hipKneeDist is decreasing, that means the user is squatting down - see for yourself using the skeleton!
                        if (hipKneeDist <= 0.65 * this.state.thighLen && !(this.state.jumpingKeyPos)) {
                            this.setState({ squatKeyPos: 1 });
                        }
                        break;
                    case 1:
                        // when hipKneeDist recovers to close to the thighLen, that means the user has stood back up
                        if (hipKneeDist / this.state.thighLen >= 0.9) {
                            this.setState({ squatKeyPos: 0 });
                            this.setState({ squatReps: this.state.squatReps + 1 });

                            // delta is the amount of calories burned by a single squat
                            // W = mgh * 0.00239006 kCal / Joule
                            var delta = this.state.weight * 10 * ((this.state.pxHeight - this.state.lowest) / this.state.pxHeight * this.state.height) * 0.000239006;
                            this.setState({ calories: this.state.calories + delta })

                            // reset lowest state since we've stood back up
                            this.setState({ lowest: 10000000000 });
                        }
                        break;
                }
                console.log(this.state.jumpingJackReps);
                switch (this.state.jumpingKeyPos) {
                    case 0:
                        // we only track the angle between the legs to determine if the user has jumped out (no arms)
                        if (angle >= 35 && !(this.state.squatKeyPos)) {
                            this.setState({ jumpingKeyPos: 1 });
                        }
                        break;
                    case 1:
                        if (angle <= 15) {
                            this.setState({ jumpingKeyPos: 0 });
                            this.setState({ jumpingJackReps: this.state.jumpingJackReps + 1 });
                            var delta = this.state.weight * 10 * ((this.state.pxHeight - this.state.lowest) / this.state.pxHeight * this.state.height) * 0.000239006;
                            this.setState({ calories: this.state.calories + delta })
                            this.setState({ lowest: 10000000000 });
                        }
                        break;
                }
            }

            // Draw the points and lines to form the skeleton
            if (showPoints) {
                for (var i = 0; i < pose.keypoints.length; i++) {
                    const keypoint = pose.keypoints[i];
                    if (keypoint.score < minPartConfidence) {
                        continue;
                    }
                    this.drawPoint(canvasContext, keypoint['position']['x'], keypoint['position']['y']);
                }
            }

            if (showSkeleton) {
                const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, minPartConfidence);
                adjacentKeyPoints.forEach((keypoints) => {
                    this.drawSegment(canvasContext, [keypoints[0].position.x, keypoints[0].position.y],
                        [keypoints[1].position.x, keypoints[1].position.y]);
                });
            }

            // This allows us to control pose detection through the running state variable
            if (this.state.running)
                requestAnimationFrame(findPoseDetectionFrame)
        }
        findPoseDetectionFrame()
    }

    render() {
        // The video element is actually hidden because we draw the video image and skeleton to the canvas instead
        return (
            <div>
                <h1>Workout</h1>
                {this.state.redirect ? <Redirect to="/dashboard" /> : ""}
                <div class="workout-container">
                    <div>
                        <video id="videoNoShow" playsInline ref={this.getVideo} style={{
                            display: "none"
                        }} />
                        <canvas className="webcam" ref={this.getCanvas} />
                    </div>
                    <div>
                        <h2>{this.state.bodyInFrame ? "START" : "Stand up upright with your entire body in the frame"}</h2>
                        <h2>Squat Reps: {this.state.squatReps}</h2>
                        <h2>Jumping Jack Reps: {this.state.jumpingJackReps}</h2>
                        <h2>Calories: {this.state.calories.toFixed(2)}</h2>
                        <input type="button" value="End workout" onClick={this.doWorkout} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Workout;