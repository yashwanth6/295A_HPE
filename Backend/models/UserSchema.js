/*
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    emailId: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    firstName: { type: String},
    lastName: { type: String},
    contact: { type: String },
    height: { type: Number },
    weight: { type: Number },
  },
  { _id: false },
  { collection: "user" }
);

const createModel = function () {
  return mongoose.model("user", UserSchema);
};

module.exports.createModel = createModel;
*/


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


const UserSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
    sparse:true
  },
  password: {
    type: String,
    required: true
  },
  firstName:{
    type: String,
    required: true
  },
  mobile:{
    type: String
  },
  dateofbirth:{
    type: Date
  },
  nickname:{
    type: String
  },
  workouts: [workoutSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);