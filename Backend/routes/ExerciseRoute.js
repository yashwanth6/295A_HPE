
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Exercise = require('../models/ExerciseSchema');
const config = require('config');

// Adding a Exercise




// Fetch all Exercises




// Fetch a particular type of Exercise






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