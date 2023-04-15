const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  activityLevel: {
    type: String,
    required: true
  },
  BMI: {
    type: Number,
    required: true
  },
  BMR: {
    type: Number,
    required: true
  },
  BMITags: {
    type: String,
    required: true
  }
});

//module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
