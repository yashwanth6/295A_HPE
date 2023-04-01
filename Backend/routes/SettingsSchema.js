const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Settings = require('../models/SettingsSchema');
const config = require('config');
const User = require('../models/UserSchema');



// Update workout
router.put('/updateSettings', async (req, res) => {
  try {
    let workout = await Workout.findOne({});
    if (!workout) {
      // Create new document if none exists
      workout = new Workout(req.body);
      await workout.save();
    } else {
      // Update existing document
      workout = await Workout.findOneAndUpdate({}, req.body, { new: true });
    }
    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
