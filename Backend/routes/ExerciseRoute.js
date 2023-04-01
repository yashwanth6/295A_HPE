
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Exercise = require('../models/ExerciseSchema');
const config = require('config');
const User = require('../models/UserSchema');
// Adding a Exercise




// Fetch all Exercises

router.get("/getAllExercises", async(req, res) => {
     console.log(req.body.exid);
     
     try {
          const user = await User.findOne({ emailId: "abc123@gmail.com" });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          const workouts = user.workouts;
          return res.status(200).json(workouts);
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});


// Fetch a particular type of Exercise




router.post("/getactivitybyid", async(req, res) => {
     console.log(req.body.exid);
     
     try {
          const room = await Exercise.findOne({'_id' : req.body.exid})
          res.send(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});

router.post("/scores", async(req, res) => {
     try {
          // Find the user by ID
          workoutData = req.body.newScore;
          console.log(workoutData);
          const {emailId} = req.body;
          console.log(emailId);
          const user = await User.findOne({ emailId });
      
          if (!user) {
            return res.status(404).send({ message: 'User not found' });
          }
      
          // Add the new workout data to the user's workouts list
          user.workouts.push(workoutData);
      
          // Save the updated user document
          await user.save();
      
          res.send({ message: 'Workout added to user' });
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: 'Error adding workout to user' });
        }
});

router.get("/getallactivities", async(req, res) => {
    console.log(req.body);
    try {
         const act = await Exercise.find({})
         res.send(act)
    } catch (error) {
         return res.status(400).json({ message: error });
    }
});

router.post("/addactivity", async(req, res) => {
    
 const { exerciseName, exerciseType } = req.body

    const nex = new Exercise({
         
        exerciseName, 
        exerciseType
    })
    try {
         await nex.save()
         res.send('New Activity Added Successfully')
    } catch (error) {
         return res.status(400).json({ error });
    }
});

module.exports = router;