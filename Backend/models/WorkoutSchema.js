const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  nameWorkout: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  repetition: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Workout', workoutSchema);

